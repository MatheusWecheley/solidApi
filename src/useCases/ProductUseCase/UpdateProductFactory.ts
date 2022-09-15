import { UpdateProductController } from './UpdateProductController';
import { UpdateProductUseCase } from './UpdateProductUseCase';
import { MongoProductRepository } from './../../repo/implementations/MongoProductRepository';


export const updateProductFactory = () => {
    const mongoProductRepository = new MongoProductRepository();
    const updateProductUseCase = new UpdateProductUseCase(mongoProductRepository);
    const updateProductController = new UpdateProductController(updateProductUseCase);
    return updateProductController;
}