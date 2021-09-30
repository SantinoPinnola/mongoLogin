import {Router} from 'express';
import { productController } from "../controllers/productsController";
import { auth } from '../middlewares/auth';
import { checkAdmin } from '../middlewares/checkAdm';

const router = Router();


router.get('/',auth, productController.getProducts);

router.get('/:id', productController.checkProductExist, productController.getProducts);

router.post('/add',auth, checkAdmin,  productController.checkAddProduct, productController.addProduct);

router.put('/update/:id', checkAdmin, productController.checkProductExist, productController.updateProduct);

router.delete('/delete/:id', checkAdmin, productController.checkProductExist, productController.delete);


export default router;