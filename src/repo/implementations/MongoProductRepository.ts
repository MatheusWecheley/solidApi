import { IProduct, Product } from '../../entities/Product';
import { IProductsRepository } from './../IProductsRepository';


export class MongoProductRepository implements IProductsRepository {
    async findByName(name: string): Promise<IProduct> {
        return await Product.findOne({ name: name});
    }

    async findProductId(id: string): Promise<IProduct> {
        return await Product.findById({id: id});
    }

    async update(id: string, name: string, description: string, priceSell: number): Promise<IProduct> {
        return await Product.findOneAndUpdate({id: id}, {name: name, description: description, priceSell: priceSell});
    }
    
    async save(product: IProduct): Promise<void> {
        await Product.create(product);
    }

}