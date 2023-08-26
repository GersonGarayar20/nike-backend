import { Router } from 'express'
import { findAll, findOne, create, update, remove } from '../controllers/sneakers'

export const sneakers = Router()

sneakers
  .get('/', findAll)
  .get('/:id', findOne)
  .post('/', create)
  .patch('/:id', update)
  .delete('/:id', remove)
