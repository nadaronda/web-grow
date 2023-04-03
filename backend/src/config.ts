
import dotenv from 'dotenv';

dotenv.config();

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
export const DB_URL: string = process.env.DB_URL ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/web-grow-shop';

export const AUTH0 = {
    DOMAIN: process.env.AUTH0_DOMAIN,
    AUDIENCE: process.env.AUTH0_AUDIENCE,
};