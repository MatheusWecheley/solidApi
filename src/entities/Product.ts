import { v4 as uuidv4 } from "uuid";
import { Schema, model, Model, Document } from "mongoose";

interface IProduct extends Document {
    idProduct: string,
    name: string,
    description: string,
    priceBuy: number,
    priceSell: number, 
    quantity: number,
    active: boolean,
}

const ProductSchema = new Schema({
    idProduct: {
        type: String,
        default: uuidv4(),
        immutable: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    priceBuy: {
        type: Number,
        required: true
    },
    priceSell: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
},
{versionKey: false});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export { Product, IProduct };