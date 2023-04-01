import { conectDB } from '../src/lib/db';
import { Product } from '../src/models/product.model';

const produtsList = [
  { nameProduct: "Cenicero", description: "Cenicero metalico con dibujo de la pantera rosa.", price: 4, active: true },
  { nameProduct: "Semillas", description: "Semillas feminizadas, RIPPER SEEDS, para exterior e interior. Vienen de los mejores bancos Cannábico.", price: 15, active: true },
  { nameProduct: "Cachimba", description: "Cachimba de pequeño tamaño de varios colores. También se pueden personalizarbajo pedido", price: 18, active: true },
  { nameProduct: "Papeles", description: "Papel de liar con sabor de piña", price: 1.5, active: true },
  { nameProduct: "Mecheros", description: "Mecheros de todos los tamaños, y de todos los materiales.Mecheros personalizados bajo pedido.", price: 1.5, active: true },
  { nameProduct: "Bandejas", description: "Bandejas pequeñas.", price: 1.5, active: true },

  { nameProduct: "CBD Líquido", description: "CBD líqido de todos los sabores, fresa, menta, melon , marihuana etc...", price: 7.5, active: true },

];

(async () => {
  const { close } = await conectDB();


  try {
    await Product.collection.drop();

  } catch (error) {
    console.log('There are no Products to drop from db');
  }
  const mongoPromise = produtsList.map(async (element) => {
    const newProduct = new Product({ nameProduct: element.nameProduct, description: element.description, price: element.price, active: element.active });
    const doc = await newProduct.save();
    console.log(`Document created with id: ${doc._id}`);
  });
  await Promise.all(mongoPromise);

  await close();
})();
