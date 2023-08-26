import { Router } from 'express'
import { sneakers } from './sneakers'

export const routes = Router()

routes.use('/sneakers', sneakers)
