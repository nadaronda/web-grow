import mongoose, { Document, Schema } from 'mongoose'
export interface iProduct extends Document {
  //category?: String,
  nameProduct: String,
  description: String,
  price: Number,
  active: Boolean,
  // add seed categorys predefinidas
}

const schema = new Schema({
  //category: String,
  nameProduct: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  active: { type: Boolean, require: true },
}, {
  // timestamps: true
})
export const getProduct = async (idProduct: string) => {
  const products = await Product.find({ Product: idProduct }).lean()
  return products
}
export const Product = mongoose.model<iProduct>('Product', schema)