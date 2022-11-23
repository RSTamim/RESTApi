const express = require("express");
const router = express.Router();
//Get
/*router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello, I am all contact routes.",
  });
});*/

//get
const contactController = require("../controllers/contact");
router.get("/", contactController.getAllContactController);
//POST
router.post("/", contactController.postAllContactController);
//ID
router.get("/:id", contactController.getSingleContact);
//Delete
router.get("/:id", contactController.deleteContact);
//Put
router.get("/:id", contactController.editContact);

//extract id from url

/*router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json({
    id,
  });
});*/

module.exports = router;
