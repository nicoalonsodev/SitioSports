const { Router } = require('express');
const router = Router();
const multer = require("multer")

// const { getPropertyIdHandler } = require('../handlers/getPropertyIdHandler');


// const { deleteUserHandler } = require('../handlers/deleteUserHandler')

// const { postContactHandler } = require('../handlers/postContactHandler');
// const { postAppraisalsHandler } = require('../handlers/postAppraisalsHandler');
// const { createOrderHandler }= require('../handlers/postCreateOrderHandler');
// const { deleteRealStateHandler } = require('../handlers/deleteRealStateHandler')
// const { postFilterHandler } = require('../handlers/postFilterHandler');
// const { webhookHandler }= require('../handlers/postCreateOrderHandler');
// const { getOrdersHandler }= require('../handlers/getOrdersHandler');
// const { getExcelOrdersHandler }= require('../handlers/getExcelOrdersHandler');
// const { getExcelUsersHandler }= require('../handlers/getExcelUsersHandler');
// const { getExcelRealStateHandler }= require('../handlers/getExcelRealStateHandler');
// const { getAppraisalsHandler } = require('../handlers/getAppraisalsHandler');
// const { getOrderByIdHandler } = require('../handlers/getOrderByIdHandler');
// const { getContactByIdHandler } = require('../handlers/getContactByIdHandler');
// const { getAllContactHandler } = require('../handlers/getAllContactHandler');
// const { getAllAppraisalsHandler } = require('../handlers/getAllAppraisalsHandler');
// const { getAllTagsHandler } = require('../handlers/getAllTagsHandler');
// const { getTestimonialsHandler } = require('../handlers/getTestimonialsHandler');
// const { postTestimonialHandler } = require('../handlers/postTestimonialHandler');
const { getAllProductsHandler }= require('../handlers/getAllProductsHandler');
const { getProductByIdHandler }= require('../handlers/getProductByIdHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler');
const { getUserByIdHandler } = require('../handlers/getUserByIdHandler');

const { postProductHandler }= require('../handlers/postProductHandler');
const { postUserHandler } = require('../handlers/postUserHandler');

const { putUserHandler } = require('../handlers/putUserHandler');
const { putProductHandler } = require('../handlers/putProductHandler');
// const mul = multer()
// router.use(mul.fields([{name:"photos", maxCount:6}]))

// router.get('/product', realStateHandler);
// router.get('/realState/:id', getPropertyIdHandler);
router.get('/products', getAllProductsHandler);
router.get('/products/:id', getProductByIdHandler);
router.get('/users', getUsersHandler);
router.get('/users/:id', getUserByIdHandler);
// router.get('/success', (req, res)=> res.send(req.query.payment_id));
// router.get('/pending', (req, res)=> res.send("pend") );
// router.get('/failure', (req, res)=> res.send("fail"));
// router.get('/orders', getOrdersHandler); 
// router.get('/download/orders', getExcelOrdersHandler);
// router.get('/download/users', getExcelUsersHandler);
// router.get('/download/realState', getExcelRealStateHandler);
// router.get('/appraisals/:userId', getAppraisalsHandler);
// router.get('/orders/:userId', getOrderByIdHandler);
// router.get('/contact/:userId', getContactByIdHandler);
// router.get('/contact', getAllContactHandler);
// router.get('/tags', getAllTagsHandler);
// router.get('/testimonials', getTestimonialsHandler);
// router.get('/appraisals', getAllAppraisalsHandler)
router.post('/products', postProductHandler);
router.post('/users', postUserHandler);
// router.post('/testimonials', postTestimonialHandler);
// router.post('/contact', postContactHandler);
// router.post('/appraisals', postAppraisalsHandler);
// router.post('/filter', postFilterHandler);
// router.post('/webhook', webhookHandler);
// router.post('/createOrder/:id', createOrderHandler);

// router.delete('/users/:id', deleteUserHandler);
// router.delete('/realState/:id', deleteRealStateHandler)

router.put('/users/:id', putUserHandler);
router.put('/products/:id', putProductHandler);


module.exports = router;

