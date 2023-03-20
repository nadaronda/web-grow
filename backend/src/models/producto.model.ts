import mongoose, { Document, Schema } from 'mongoose'
export interface iProducto extends Document {
    categoria: String,
    nombreProducto: String, 
    descripcion: String, 
    precio: Number
    // add seed categorias predefinidas
}

const schema = new Schema({
  categoria: { type: String, require: true },
  nombreProducto:{type:String, require: true},
  descripcion:{type:String, require: true},
  precio:{type:Number, require: true},

}, {
  // timestamps: true
})
export const getProducto = async (idProducto: string) => {
  const productos = await Producto.find({ Producto: idProducto}).lean()
  return productos
}
export const Producto = mongoose.model<iProducto>('Producto', schema)