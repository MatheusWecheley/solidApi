import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';
import { MongoClientRepository } from './../../repo/implementations/MongoClienteRepository';


export const createClientFactory = () => {
    const mongoClientRepository = new MongoClientRepository();
    const createClientUseCase = new CreateClientUseCase(mongoClientRepository);
    const createClientController = new CreateClientController(createClientUseCase);
    return createClientController;
}