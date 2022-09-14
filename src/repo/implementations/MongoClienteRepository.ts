import { Client, IClient } from '../../entities/Client';
import { IClientsRepository } from './../IClientsRepository';

export class MongoClientRepository implements IClientsRepository {

    async findByName(name: string): Promise<IClient> {
        return await Client.findOne({name: name});
    }

    async save(client: IClient): Promise<void> {
        await Client.create(client);
    }
}