
import  express  from 'express';
const router = express.Router();
const productController = require('../controllers/productController');
router.post('/create', productController.createProduct);
router.get('/', productController.listProducts);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateQuantity);
module.exports = router;
