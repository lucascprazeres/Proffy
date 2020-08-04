import express from 'express';
import db from './database/connection';

import parseHoursToMinutes from './utils/parseHoursToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post('/classes', async (request, response) => {
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
})

export default routes;