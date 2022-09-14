import { createClientFactory } from './useCases/ClientUseCase/CreateClientFactory';
import { response, Router } from "express";

const router = Router();

router.post('/users', (request, response) => {
    createClientFactory().handle(request, response)
 });

export { router };