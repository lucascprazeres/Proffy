import db from '../database/connection';

import { Request, Response } from 'express'

export default class ConnectionsController {
  public async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  public async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections').insert({ user_id });

    return response.status(201).send();
  }
}