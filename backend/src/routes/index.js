const { Router } = require("express");
const router = Router();
const multer = require("multer");
const { getOrdersHandler } = require("../handlers/getOrdersHandler");
const { getAllProductsHandler } = require("../handlers/getAllProductsHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { deleteProductHandler } = require("../handlers/deleteProductHandler");
const {
  getAllCommissionsHandler,
} = require("../handlers/getAllCommissionsHandler");
const {
  createOrder,
  receiveWebhook,
} = require("../controllers/paymentController");
const { postProductHandler } = require("../handlers/postProductHandler");
const { postUserHandler } = require("../handlers/postUserHandler");
const { postOrderHandler } = require("../handlers/postOrderHandler");
const { postCommissionsHandler } = require("../handlers/postCommissionHandler");
const { putCommissionsHandler } = require("../handlers/putCommissionsHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putProductHandler } = require("../handlers/putProductHandler");
const { putOrderHandler } = require("../handlers/putOrderHAndler");
const { authenticateToken } = require("../helpers/authenticateToken");
const { loginHandler } = require("../handlers/authHandler");
const { protectedRouteHandler } = require("../handlers/authHandler");
const { deleteUserHandler } = require("../handlers/deleteUserHandler");
const {
  deleteCommissionhandler,
} = require("../handlers/deleteCommissionHandler");
const { getDiscountsHandler } = require("../handlers/getDiscountsHandler");
const { postDiscountsHandler } = require("../handlers/postDiscountsHandler");
const { putDiscountsHandler } = require("../handlers/putDiscountsHandler");
const {
  getCorreoArgentinoToken,
} = require("../handlers/getCorreoArgentinoToken");
const { getRatesHandler } = require("../handlers/getRatesHandler");
const { getAgenciesHandler } = require("../handlers/getAgenciesHandler");
const { getPromotionHandler } = require("../handlers/getPromotionHandler");
const { putPromotionHandler } = require("../handlers/putPromotionHandler");
const { postPromotionHandler } = require("../handlers/postPromotionHandler");
const {deletePromotionHandler} = require("../handlers/deletePromotionHandler");
const {getPromotionBySlugHandler} = require("../handlers/getPromotionBySlugHandler");

router.get("/products", getAllProductsHandler);
router.get("/products/:slug", getProductByIdHandler);
router.get("/users", getUsersHandler);
router.get("/orders", getOrdersHandler);
router.get("/commissions", getAllCommissionsHandler);
router.get("/discounts", getDiscountsHandler);
router.get("/correo-argentino-token", getCorreoArgentinoToken);
router.get("/promotion", getPromotionHandler);
router.get("/promotion/:slug", getPromotionBySlugHandler);

// router.get('/success', (req, res)=> res.send(req.query.payment_id));
// router.get('/pending', (req, res)=> res.send("pend") );
// router.get('/failure', (req, res)=> res.send("fail"));

router.post("/login", loginHandler);
router.get("/admin", authenticateToken, protectedRouteHandler);

router.post("/products", postProductHandler);
router.post("/users", postUserHandler);
router.post("/commissions", postCommissionsHandler);
router.post("/create-order", createOrder);
router.post("/webhook", receiveWebhook);
router.post("/order", postOrderHandler);
router.post("/discounts", postDiscountsHandler);
router.post("/rates", getRatesHandler);
router.post("/agencies", getAgenciesHandler);
router.post("/promotion", postPromotionHandler);

router.put("/products/:id", putProductHandler);
router.put("/users/:id", putUserHandler);
router.put("/commissions/:id", putCommissionsHandler);
router.put("/order/:id", putOrderHandler);
router.put("/discounts/:code", putDiscountsHandler);
router.put("/promotion/:id", putPromotionHandler);

router.delete("/product/:id", deleteProductHandler);
router.delete("/promotion/:id", deletePromotionHandler);
router.delete("/user/:id", deleteUserHandler);
router.delete("/commissions/:id", deleteCommissionhandler);

module.exports = router;
