const router = require("express").Router();

const{
    getUsers,
    getsingleUser
    
} = require("../../controllers/userController");


router
.route("/")
.get(getUsers);

router
.route("/:id")
.get(getsingleUser);

module.exports = router;