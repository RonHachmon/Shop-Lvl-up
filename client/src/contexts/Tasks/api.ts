import axios from "axios";
import { Product } from "../../types/products";
import {options} from "../../types/axios";
const BASE_URL = 'http://localhost:8080/api/product';

export const getByCategoryAndName = async (category: string, name:string): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: { category: category, name: name },
    };
    const { data } = await axios.request(options);
    return data;
}
export const getByCategory = async (category: string): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: { category: category }
    };
    const { data } = await axios.request(options);
    return data;
}

export const getByName = async (name:string): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: {name: name }
    };
    const { data } = await axios.request(options);
    return data;
}

export const getAll = async (): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: {},
    };
    const { data } = await axios.request(options);
    return data;
}

export const updateQuantity = async (_id: string, _quantity:number): Promise<Product>=> {
    const options: options = {
        method: 'PUT',
        url: BASE_URL + '/update-quantity',
        params: { id: _id, quantity: _quantity },
    };
    const { data } = await axios.request(options);
    return data;
}