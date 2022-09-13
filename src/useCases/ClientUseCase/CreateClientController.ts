import { CreateClientUseCase } from './CreateClientUseCase';
import { Response, Request } from 'express';


export class CreateClientController {
    constructor(
        private CreateClientUseCase: CreateClientUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, lastName, gender} = request.body;

        try {
            await this.CreateClientUseCase.execute({
                name,
                lastName,
                gender
            });
            return response.json({message: "Success create Client!"});
        } catch (error) {
            return response.json({message: "Erro create new Client!", err: error});
        }
    }
}