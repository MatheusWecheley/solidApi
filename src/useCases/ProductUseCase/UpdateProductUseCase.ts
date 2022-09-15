import { IUpdateProductRequestDTO } from './CreateProductDTO';
import { IProductsRepository } from '../../repo/IProductsRepository';


export class UpdateProductUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ) {};

    async execute(data: IUpdateProductRequestDTO) {
        const verify = await this.productsRepository.findProductId(data.idProduct);

        if(verify) {
            await this.productsRepository.update(data.idProduct, data.name, data.description, data.priceSell);
        } else {
            throw new Error("Not possible update user!");
        }
    }
}