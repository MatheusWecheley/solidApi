export interface ICreateProductRequestDTO {
    name: string,
    description?: string,
    priceBuy: number,
    priceSell?: number,
    quantity?: number,
}