import { Client } from './../../entities/Client';
import { ICreateClientRequestDTO } from './CreateClienteDTO';
import { IClientsRepository } from './../../repo/IClientsRepository';


export class CreateClientUseCase {

    constructor(
        private clientsRepository: IClientsRepository
    ) {}

    async execute(data: ICreateClientRequestDTO) {
        const clientAlreadyExists = await this.clientsRepository.findByName(data.name);

        if(clientAlreadyExists) {
            throw new Error('Client Already Exists!');
        }

        const client = new Client(data);

        await this.clientsRepository.save(client);
    }
}