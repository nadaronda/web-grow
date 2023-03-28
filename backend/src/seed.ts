import { conectDB } from '../src/lib/db';
import { Product } from '../src/models/product.model';

const produtsList = [
  { nameProduct: "Cenicero", description: "cenicero metalico con dibujo de la pantera rosa", price: 4, active: true },
  { nameProduct: "Semillas", description: "semillas ferminizadas", price: 15, active: true },
  { nameProduct: "Cachimba", description: "cachimba de pequeño tamaño", price: 18, active: true },
  { nameProduct: "Papeles", description: "papel de liar con sqabor de piña", price: 1.5, active: true },
];

(async () => {
  const { close } = await conectDB();


  try {
    await Product.collection.drop();

  } catch (error) {
    console.log('There are no Products to drop from db');
  }
  const mongoPromise = produtsList.map(async (element) => {
    const newProduct = new Product({ nameProduct: element.nameProduct, description: element.description, price: element.price, active: element.active })
    const doc = await newProduct.save()
    console.log(`Document created with id: ${doc._id}`)
  })
  await Promise.all(mongoPromise)

  await close();
})();
