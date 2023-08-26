import { connect } from 'mongoose'

const uriMongo = process.env.MONGO_URI ?? ''

export const connectMongo = async () => {
  try {
    await connect(uriMongo)
    console.log('mongo connect')
  } catch (error) {
    console.log('mongo error')
  }
}
