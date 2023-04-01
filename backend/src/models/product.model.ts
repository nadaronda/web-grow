import mongoose, { Document, Schema } from 'mongoose';
import { interfaceProduct } from '../types/interfaceProduct';
const schema = new Schema({
  //category: String,
  nameProduct: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  active: { type: Boolean, require: true },
  img: { type: Object, require: false }

}, {
  // timestamps: true
});
export const getProduct = async (idProduct: string) => {
  const products = await Product.find({ Product: idProduct }).lean();
  return products;
};
export const Product = mongoose.model<interfaceProduct>('Product', schema);