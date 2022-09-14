import { connect } from "mongoose";
require('dotenv/config');
const {DB_PORT,DB_HOST, DB_DATABASE} = process.env


export default class Database {
   async createConnection(): Promise<any> {
      try {
         await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`)
         .then(() => console.log('Conetado ao MongoDB'))
         .catch((err) => console.log(err));
      } catch (err) {
         console.log("Erro ao conectar no MongoDB", err);
      }
   }
}