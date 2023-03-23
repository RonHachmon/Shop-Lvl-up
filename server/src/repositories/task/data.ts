import  Product  from '../../models/Product/index.model'
const products = [
    {
      name: 'Milk',
      category: 'dairy',
      price: 7,
      quantity: 10,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/AAL20_L_P_4131074_1.png',
      description: 'Fresh milk from our farm',
    },
    {
      name: 'Bread',
      category: 'bakery',
      price: 3,
      quantity: 20,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/NXC60_L_P_7296073219347_1.png',
      description: 'Homemade bread with whole grains',
    },
    {
      name: 'Cheese',
      category: 'dairy',
      price: 5,
      quantity: 10,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/PGI28_L_P_1258903_1.png',
      description: 'Sharp cheddar cheese made from high-quality milk'
    },
    {
      name: 'Steak',
      category: 'meat',
      price: 60,
      quantity: 8,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/LJE64_L_P_7296073551577_1.png',
      description: 'Juicy and flavorful sirloin steak from grass-fed cows'
    },
    {
      name: 'Baguette',
      category: 'bakery',
      price:9,
      quantity: 18,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/EWO24_L_P_3993_1.png',
      description: 'Crusty French baguette baked in a stone oven'
    },
    {
      name: 'Pretzels',
      category: 'snacks',
      price: 2,
      quantity: 35,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/VUF48_L_P_7290117263136_1.png',
      description: 'Crunchy and savory pretzels with a touch of salt'
    },
    {
      name: 'Bamba',
      category: 'snacks',
      price: 7,
      quantity: 35,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/TBR24_L_P_66318_1.png',
      description: 'Classic bamba'
    },
    {
      name: 'Croissant',
      category: 'bakery',
      price: 4,
      quantity: 22,
      image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/MYR42_L_P_5201360582280_1.png',
      description: 'Buttery and flaky croissant baked to perfection'
      },
  ];

export const add_hard_coded_products = async (): Promise<void> => {
    try {
        await Product.bulkCreate(products);
        console.log('Hard coded data add suingccessfully!');
      } catch (error) {
        console.error('Error adding  data:', error);
      }
    }
