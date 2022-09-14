import { IProduct, Product } from '../../entities/Product';
import { IProductsRepository } from './../IProductsRepository';


export class MongoProductRepository implements IProductsRepository {
    async findByName(name: string): Promise<IProduct> {
        return await Product.findOne({ name: name});
    }
    
    async save(product: IProduct): Promise<void> {
        await Product.create(product);
    }
}