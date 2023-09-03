import { object, enumType, array, number, string, withDefault, safeParse, partial } from 'valibot'

const sneakerSchema = object({
  brand: string(),
  model: string(),
  color: string(),
  sizes: array(number()),
  gender: withDefault(enumType(['Hombre', 'Mujer']), 'Hombre'),
  price: number(),
  category: string(),
  description: string(),
  images: array(string())
})

export const validateSneaker = (object: any) => {
  return safeParse(sneakerSchema, object)
}

export const partialValidateSneaker = (object: any) => {
  return safeParse(partial(sneakerSchema), object)
}
