
const express = require('express');
const router = express.Router();
let {createPerson, updatePerson, deletePerson, readPeople} = require('../controllers/peopleController');


// router
// .get("/", readPeople)
// .post("/", createPerson)
// .put("/", updatePerson)
// .delete("/", deletePerson)


router.route("/").get(readPeople).post(createPerson)
router.route("/:id").post(updatePerson).delete(deletePerson)

module.exports = router;