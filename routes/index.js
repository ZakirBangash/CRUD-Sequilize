const { Router } = require("express");
const router = Router();
// Routers
const tutorialRouter = require("./tutorial");

router.use("/tutorials", tutorialRouter);
module.exports = router;