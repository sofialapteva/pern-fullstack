const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/register", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
