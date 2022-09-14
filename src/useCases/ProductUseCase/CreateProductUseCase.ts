import { Product } from '../../entities/Product';
import { IProductsRepository } from './../../repo/IProductsRepository';
import { ICreateProductRequestDTO } from './CreateProductDTO';


export class CreateProductUseCase {

    constructor(
        private createProductRepository: IProductsRepository
    ) {}

    async execute(data: ICreateProductRequestDTO)  {
        const productVerify = await this.createProductRepository.findByName(data.name);

        if(productVerify) {
            throw new Error(`Product ${data.name} already exists!`);
        }

        const product = new Product(data);

        await this.createProductRepository.save(product);
    }
}