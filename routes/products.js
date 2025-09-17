import express from 'express'
import { getAllproducts, getAllproductsTesting } from '../controllers/products.js';

const router = express.Router();

router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductsTesting);

export default router;