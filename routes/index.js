const { Router } = require("express");
const router = Router();

// Routers
const toturialRouter = require("./toturial");

router.use("/toturials", toturialRouter);


module.exports = router;