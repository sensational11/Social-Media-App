const router = require("express").Router();

const{
    getUsers,
    getSingleUser,
    createUser,
    
} = require("../../controllers/userController");


router
.route("/")
.get(getUsers);

router
.route("/:id")
.get(getsingleUser);

module.exports = router;