import { IClient } from './../entities/Client';


export interface IClientsRepository {
    findByName(name: string): Promise<IClient>;
    save(client: IClient): Promise<void>;
}