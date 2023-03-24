import { Router } from 'express';
import { or } from 'sequelize';
import { Product } from '../../models';
import * as ProductRepo from '../../repositories/task'
const router = Router();

//get all product
//can accepts query such as name and category
router.get('/', async (req, res) => {
    const category:string = req.query.category as string;
    const name:string = req.query.name as string; 
    let products:Product[] = [];
    if (name && category) {
        products = await ProductRepo.findByCategoryAndName(category, name);
    } else if (name) {
        products = await ProductRepo.findByName(name);
    } else if (category) {
        products = await ProductRepo.findByCategory(category);
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
