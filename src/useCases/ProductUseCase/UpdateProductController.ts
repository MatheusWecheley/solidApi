import { UpdateProductUseCase } from './UpdateProductUseCase';
import { Request, Response } from "express";


export class UpdateProductController {
    constructor(
        private updateProductUseCase: UpdateProductUseCase
    ) {};

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, priceSell} = request.body;

        try {
            await this.updateProductUseCase.execute({
                name,
                description,
                priceSell
            });
            return response.json({message: `Success update ${name}!`});
        } catch (error) {
            return response.json(error);
        }
    }
}