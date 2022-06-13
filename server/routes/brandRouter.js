const Router = require("express");
const brandController = require("../controllers/brandController");
const router = new Router();
const checkRoleMiddleware = require("../middlewares/checkRoleMiddleware");
router.get("/", brandController.getAll);
router.post("/", checkRoleMiddleware("ADMIN"), brandController.create);

module.exports = router;
