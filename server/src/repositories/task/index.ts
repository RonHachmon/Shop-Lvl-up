import { Op } from 'sequelize';

import { Product } from '../../models';


export const updateQuantity = async (_id: string,amount:number): Promise<Product> => {
    const specific_Product = await Product.findByPk(_id);
    specific_Product.quantity = amount;
    return await specific_Product.save();
}


export const findById = (id: string): Promise<Product> => {
    return Product.findByPk(id);
}

export const findAll = (): Promise<Product[]> => {
    return Product.findAll();
}

export const findByCategory = (category:string): Promise<Product[]> => {
    return Product.findAll({
        where:{
            category:category
        }
    });

};

export const findByName = (name:string): Promise<Product[]> => {
    return Product.findAll({
        where:{
            name:{
            [Op.iLike]:name+'%'
            }
        }
    });
}



export const findByCategoryAndName = (category:string,name:string): Promise<Product[]> => {
    return Product.findAll({
        where:{
            name:{
            [Op.iLike]:name+'%'
            },
            category:category
        }
    });
}




