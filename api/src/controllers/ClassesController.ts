import db from '../database/connection';

import { Request, Response } from 'express'

import parseHoursToMinutes from '../utils/parseHoursToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  public async index(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes.'
      });
    }

    const timeInMinutes = parseHoursToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select(['class_schedule.*'])
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }
  
  public async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      })
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id
      })
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: parseHoursToMinutes(scheduleItem.from),
          to: parseHoursToMinutes(scheduleItem.to),
        }
      })
    
      await trx('class_schedule').insert(classSchedule);
  
      await trx.commit();
      
      return response.status(201).send();
    } catch (err) {
      await trx.commit();
  
      return response.status(400).json({ error: 'Unexpected error while creating a class.' })
    }
  }
}