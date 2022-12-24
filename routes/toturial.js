const { Router } = require("express");
const router = Router();

// Controllers
const controller = require("../controllers/toturials");

router.post("/", controller.create);
router.delete("/:id", controller.delete);
router.delete("/", controller.deleteAll);
router.get("/", controller.findAll);
router.get("/published", controller.findAllPublished);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);


module.exports = router;