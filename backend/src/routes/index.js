const { Router } = require("express");
const router = Router();
const multer = require("multer");
const { getOrdersHandler } = require("../handlers/getOrdersHandler");
const { getAllProductsHandler } = require("../handlers/getAllProductsHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { deleteProductHandler } = require("../handlers/deleteProductHandler");
const { getAllCommissionsHandler } = require("../handlers/getAllCommissionsHandler");
const { createOrder, receiveWebhook } = require("../controllers/paymentController");
const { postProductHandler } = require("../handlers/postProductHandler");
const { postUserHandler } = require("../handlers/postUserHandler");
const { postOrderHandler } = require("../handlers/postOrderHandler");
const { postCommissionsHandler} = require("../handlers/postCommissionHandler")
const { putCommissionsHandler } = require("../handlers/putCommissionsHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putProductHandler } = require("../handlers/putProductHandler");
const { putOrderHandler } = require("../handlers/putOrderHAndler");
const { authenticateToken } = require('../helpers/authenticateToken');
const {loginHandler} = require('../handlers/authHandler');
const {protectedRouteHandler} = require('../handlers/authHandler');
const {deleteUserHandler} = require('../handlers/deleteUserHandler');

router.get("/products", getAllProductsHandler);
router.get("/products/:id", getProductByIdHandler);
router.get("/users", getUsersHandler);
// router.get("/users/:id", getUserByIdHandler);
router.get("/orders", getOrdersHandler);
router.get("/commissions", getAllCommissionsHandler);

// router.get('/success', (req, res)=> res.send(req.query.payment_id));
// router.get('/pending', (req, res)=> res.send("pend") );
// router.get('/failure', (req, res)=> res.send("fail"));

router.post('/login', loginHandler);
router.get('/admin', authenticateToken, protectedRouteHandler);

router.post("/products", postProductHandler);
router.post("/users", postUserHandler);
router.post("/commissions", postCommissionsHandler);
router.post("/create-order", createOrder);
router.post('/webhook', receiveWebhook);
router.post('/order', postOrderHandler);

router.put("/products/:id", putProductHandler);
router.put("/users/:id", putUserHandler);
router.put("/commissions/:id", putCommissionsHandler);
router.put("/order/:id", putOrderHandler);

router.delete("/product/:id", deleteProductHandler);
router.delete("/user/:id", deleteUserHandler);

module.exports = router;
