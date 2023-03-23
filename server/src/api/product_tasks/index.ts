import { Router } from 'express';
import { or } from 'sequelize';
import * as ProductRepo from '../../repositories/task'
const router = Router();

//get all product
//acctepts query such as name and category
// if they werent sent it will be treated as null,
// and therfore ingored
router.get('/', async (req, res) => {
    const category = req.query.category as string;
    const name = req.query.name as string;
    
    let products;
    
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