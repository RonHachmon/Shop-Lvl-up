import axios from "axios";
import { 
    CategoryAndNameType, 
    Product,
    NameType,
    CategoryType,
    QuantityAndIDType
 } from "../../types/products";
import {options} from "../../types/axios";
const BASE_URL = 'http://localhost:8080/api/product';

export const getByCategoryAndName = async (properties: CategoryAndNameType): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params:  properties ,
    };
    const { data } = await axios.request(options);
    return data;
}
export const getByCategory = async (properties: CategoryType): Promise<Product[]>=> {
   
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: properties
    };
    const { data } = await axios.request(options);
    return data;
}

export const getByName = async (properties:NameType): Promise<Product[]>=> {
    const options: options = {
        method: 'GET',
        url: BASE_URL + '/',
        params: properties 
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

export const updateQuantity = async (properties: QuantityAndIDType): Promise<Product>=> {
    const options: options = {
        method: 'PUT',
        url: BASE_URL + '/update-quantity',
        params: properties ,
    };
    const { data } = await axios.request(options);
    return data;
}