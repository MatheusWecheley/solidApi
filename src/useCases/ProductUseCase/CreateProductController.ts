import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';


export class CreateProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, description, priceBuy, priceSell, quantity} = request.body;

        try {
            await this.createProductUseCase.execute({
                name,
                description,
                priceBuy,
                priceSell,
                quantity
            });
            return response.json(`Product ${name} created success!`);
        } catch (error) {
            return response.json(error);
        }
    }
}