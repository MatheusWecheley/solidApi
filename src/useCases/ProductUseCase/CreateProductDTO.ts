export interface ICreateProductRequestDTO {
    name: string,
    description?: string,
    priceBuy: number,
    priceSell?: number,
    quantity?: number,
}

export interface IUpdateProductRequestDTO {
    idProduct?: string,
    name?: string,
    description?: string,
    priceSell?: number,
}