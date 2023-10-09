import { Router } from 'express'
import { findAll, findOne, create, update, remove } from '../controllers/sneakers'
import { isAuthenticated } from '../middleware/authenticated'

export const sneakers = Router()

sneakers
  .get('/', findAll)
  .get('/:id', findOne)
  .post('/', isAuthenticated, create) // private
  .patch('/:id', isAuthenticated, update) // private
  .delete('/:id', isAuthenticated, remove) // private
