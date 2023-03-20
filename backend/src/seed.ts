import { conectDB } from '../src/lib/db';
import { Producto } from '../src/models/producto.model';
/*const productos=[{}]
await Promise.all(productos.map(async (ing) => {
    await Objetivo.create({ categoria: Object.keys(ing)[0],nombreProducto: Object.keys(ing)[0], descripcion: Object.values(ing)[0],precio: Object.keys(ing)[0] }).then((e) => console.log(`🍊Create Objetivo ${e.name}`));
  }))*/
 /*
  const recipe = [{ apples: '1kg' }, { flour: '2cups' }, { butter: '3spoons' }, { eggs: '6uds' }, { milk: '1l' }];
  await Promise.all(productos.map(async (ing) => {
    await Objetivo.create({ name: Object.keys(ing)[0], quantity: Object.values(ing)[0] }).then((e) => console.log(`🍊Create Objetivo ${e.name}`));
  }));*/
(async () => {
  const { close } = await conectDB();
  try {
    await Producto.collection.drop();
  } catch (error) {
    console.log('There are no Products to drop from db');
  }
  
  await close();
})();
