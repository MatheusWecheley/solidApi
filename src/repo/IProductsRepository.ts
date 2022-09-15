import { IProduct } from "../entities/Product";

export interface IProductsRepository {
    findByName(name: string): Promise<IProduct>;
    findProductId(id: string): Promise<IProduct>;
    update(id: string, name: string, description: string, priceSell: number): Promise<IProduct>;
    save(product: IProduct): Promise<void>;
}