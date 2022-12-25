const { Router } = require("express");
const router = Router();
// Controllers
const tutorialController = require("../controllers/tutorial");
router.post("/", tutorialController.create);
router.delete("/:id", tutorialController.delete);
router.delete("/", tutorialController.deleteAll);
router.get("/", tutorialController.findAll);
router.get("/published", tutorialController.findAllPublished);
router.get("/:id", tutorialController.findOne);
router.put("/:id", tutorialController.update);

module.exports = router;