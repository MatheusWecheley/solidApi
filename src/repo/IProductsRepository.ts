import { IProduct } from "../entities/Product";

export interface IProductsRepository {
    findByName(name: string): Promise<IProduct>;
    save(product: IProduct): Promise<void>;
}