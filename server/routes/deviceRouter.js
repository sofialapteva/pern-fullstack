const Router = require("express");
const deviceController = require("../controllers/deviceController");
const router = new Router();
const checkRoleMiddleware = require("../middlewares/checkRoleMiddleware");
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.post("/", checkRoleMiddleware("ADMIN"), deviceController.create);

module.exports = router;
