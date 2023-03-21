import { Product } from '../../models';

export const findById = (id: string): Promise<Product> => {
    return Product.findByPk(id);
}

export const findAll = (): Promise<Product[]> => {
    return Product.findAll();
}

export const create = (title): Promise<Product> => {
    return Product.create({
        title,
    })
}