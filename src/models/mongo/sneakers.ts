import { Schema, model } from 'mongoose'

const snearkerSchema = new Schema({
  brand: String,
  model: String,
  color: String,
  sizes: [Number],
  gender: String,
  price: Number,
  category: String,
  description: String,
  images: [String]
},
{
  timestamps: false,
  versionKey: false
})

const SnearkerModel = model('sneaker', snearkerSchema)

// obtener todas las zapatillas
export const listSneakers = async () => await SnearkerModel.find()

// obtener zapatillas por id
export const getSneakerById = async (id: any) => await SnearkerModel.findById(id)

// buscar zapatillas por genero
export const filterSneakers = async ({ category, gender, minPrice, maxPrice }: any) => {
  const obj: any = {}

  if (category !== undefined) {
    obj.category = category
  }
  if (gender !== undefined) {
    obj.gender = gender
  }
  if (minPrice !== undefined && maxPrice !== undefined) {
    return await SnearkerModel.find({ ...obj, price: { $gte: minPrice, $lte: maxPrice } })
  }

  return await SnearkerModel.find(obj)
}

// agregar una zapatilla
export const addSneaker = async (sneaker: any) => {
  const newSneaker = new SnearkerModel(sneaker)
  return await newSneaker.save()
}

// actualizar una zapatilla
export const updateSneaker = async (id: any, sneaker: any) => {
  return await SnearkerModel.findOneAndUpdate({ _id: id }, sneaker, { new: true })
}

// eliminar una zapatilla
export const deleteSneaker = async (id: any) => {
  await SnearkerModel.findOneAndDelete({ _id: id })
}
