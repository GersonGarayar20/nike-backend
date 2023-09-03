import { Request, Response } from 'express'
import { listSneakers, getSneakerById, addSneaker, updateSneaker, deleteSneaker, filterSneakers } from '../models/mongo/sneakers'
import { validateSneaker, partialValidateSneaker } from '../schemas/sneakers'

export const findAll = async (req: Request, res: Response) => {
  if (Object.getOwnPropertyNames(req.query).length !== 0) {
    const data = await filterSneakers(req.query)
    return res.json({ data, message: 'filtro' })
  }

  const data = await listSneakers()
  res.json({ data, message: 'getAll' })
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await getSneakerById(id)
  if (data === null) return res.json({ message: 'id no valido' })
  res.json({ data, message: 'find one' })
}

export const create = async (req: Request, res: Response) => {
  const result = validateSneaker(req.body)

  if (!result.success) return res.status(404).json({ message: 'create error', error: result.error })

  const data = await addSneaker(result.data)
  res.status(201).json({ message: 'create', data })
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = partialValidateSneaker(req.body)

  if (!result.success) return res.json({ message: 'update error', error: result.error })

  const data = await updateSneaker(id, result.data)

  if (data === null) return res.json({ message: 'id no valido' })

  res.json({ message: 'update', data })
}

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params

  const data = await deleteSneaker(id)

  if (data === null) return res.json({ message: 'id no valido' })

  res.json({ message: 'remove' })
}
