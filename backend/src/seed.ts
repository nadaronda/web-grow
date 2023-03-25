import { conectDB } from '../src/lib/db';
import { Product } from '../src/models/product.model';

(async () => {
  const { close } = await conectDB();
  try {
    await Product.collection.drop();
  } catch (error) {
    console.log('There are no Products to drop from db');
  }

  await close();
})();
