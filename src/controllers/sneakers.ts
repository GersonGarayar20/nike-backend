import { Request, Response } from 'express'
import { listSneakers, getSneakerById, addSneaker, updateSneaker, deleteSneaker, filterSneakers } from '../models/mongo/sneakers'
import { validateSneaker, partialValidateSneaker } from '../schemas/sneakers'

export const findAll = async (req: Request, res: Response) => {
  // aca hay un error
  if (req.query !== undefined) {
    const data = await filterSneakers(req.query)
    return res.json({ data, message: 'find one' })
  }

  const data = await listSneakers()
  res.json({ data, message: 'getAll' })
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await getSneakerById(id)
  res.json({ data, message: 'find one' })
}

export const create = async (req: Request, res: Response) => {
  const result = validateSneaker(req.body)

  if (result.success) {
    const data = await addSneaker(result.data)

    res.json({ message: 'create', data })
  } else {
    res.json({ message: 'create', error: result.error })
  }
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = partialValidateSneaker(req.body)

  if (result.success) {
    const data = await updateSneaker(id, result.data)

    res.json({ message: 'update', data })
  } else {
    res.json({ message: 'update', error: result.error })
  }
}

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params

  await deleteSneaker(id)

  res.json({ message: 'remove' })
}
