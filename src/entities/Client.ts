import { v4 as uuidv4 } from "uuid";
import { Schema, model, Model, Document } from "mongoose";

interface IClient extends Document {
    idCliente: string,
    name: string,
    lastName: string,
    gender: string
    ativo: boolean,
 }
 
 const ClientSchema = new Schema({
    idCliente: {
       type: String,
       default: uuidv4(),
       immutable: true,
       unique: true,
       index: true,
    },
    name: {
       type: String,
       require: true,
    },
    lastName: {
       type: String,
       require: true,
    },
    gender: {
       type: String,
       require: true,
    },
    ativo: {
      type: Boolean,
      default: true,
   },
 }, 
 {versionKey: false});
 
 const Client: Model<IClient> = model<IClient>('Client', ClientSchema);
 
 export { Client, IClient };