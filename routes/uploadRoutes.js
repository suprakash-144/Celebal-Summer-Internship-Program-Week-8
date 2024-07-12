// const express = require("express");
// const router = express.Router();
// const upload = require("../middlewares/upload");
// const uploadController = require("../controllers/uploadController");

// router.post("/upload", upload.single("file"), uploadController);

// module.exports = router;

const express = require("express");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.post("/", uploadController);

module.exports = router;
