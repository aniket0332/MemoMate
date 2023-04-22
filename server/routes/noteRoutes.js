const express = require('express');
const { getNotes, CreateNote, getNoteById, UpdateNote, DeleteNote } = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(CreateNote);
router
.route("/:id")
.get(getNoteById)
.put(protect,UpdateNote)
.delete(protect, DeleteNote);


module.exports = router;