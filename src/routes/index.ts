import {Router} from 'express';
import productsRouter from './productsRoutes';
import cartRouter from './cartRoutes';


const router = Router();

router.use('/products', productsRouter);
router.use('/cart', cartRouter);

export default router;