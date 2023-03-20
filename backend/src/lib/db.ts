import { DB_URL } from '../confing';
import mongoose from 'mongoose';
export const conectDB= async () =>  mongoose.connect(DB_URL).then(() => {
    console.info(`📦 Connected to ${DB_URL}`)
    return {
      close: () => mongoose.disconnect()
    }
  })
