import { Client } from './../entities/Client';


export interface IClientsRepository {
    findByName(name: string): Promise<Client>;
    save(client: Client): Promise<void>;
}