import { Client } from '../../entities/Client';
import { IClientsRepository } from './../IClientsRepository';

export class MongoClientRepository implements IClientsRepository {
    
    async findByName(name: string): Promise<Client> {
        
    }

    async save(client: Client): Promise<void> {

    }
}