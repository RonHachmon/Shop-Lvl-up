import { Router } from 'express';
import { or } from 'sequelize';
import { Product } from '../../models';
import * as ProductRepo from '../../repositories/task'
const router = Router();

//get all product
//can accepts query such as name and category
router.get('/', async (req, res) => {
    const properties:any = req.query; 
    let products:Product[] = [];
    if (properties?.name && properties?.category) {
        products = await ProductRepo.findByCategoryAndName(properties.category, properties.name);
    } else if (properties?.name) {
        products = await ProductRepo.findByName(properties.name);
    } else if (properties?.category) {
        products = await ProductRepo.findByCategory(properties.category);
    } else {
        products = await ProductRepo.findAll();
    }
    res.json(products);
})

//update quantity 
router.put('/update-quantity', async (req, res) => {
    const {id,amount} = req.body;
    const updateProduct = await  ProductRepo.updateQuantity(id,amount);
    res.json(updateProduct);
});


export default router;
