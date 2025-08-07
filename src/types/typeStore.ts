import {CartItemType} from './type'

export type TypePizza ={
    pizza: CartItemType[],
    status: string,
}

export type TypeItems = {
    totalPrice: number,
    items: CartItemType[],
}