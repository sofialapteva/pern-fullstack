const Router = require("express");
const typeController = require("../controllers/typeController");
const router = new Router();
const checkRoleMiddleware = require("../middlewares/checkRoleMiddleware");
router.get("/", typeController.getAll);
router.post("/", checkRoleMiddleware("ADMIN"), typeController.create);

module.exports = router;
