import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';
import { MongoProductRepository } from './../../repo/implementations/MongoProductRepository';


export const createProductFactory = () => {
    const mongoProductRepository = new MongoProductRepository();
    const createProductUseCase = new CreateProductUseCase(mongoProductRepository);
    const createProductController = new CreateProductController(createProductUseCase);
    return createProductController;
}