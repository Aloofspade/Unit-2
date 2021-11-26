const express = require('express')

const {createBurger, getAllBurgers, getBurger, deleteBurger, updateBurger} = require("../controllers/burger")


const router = express.Router();

router.route('/').get(getAllBurgers).post(createBurger)
router.route('/:id').get(getBurger).delete(deleteBurger).patch(updateBurger)

module.exports = router;


