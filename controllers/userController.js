const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');


module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
        .then(async (users) => {
        const userObj = {
            users,
            headCount: await headCount(),

        };
        return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then(async (user) =>
        !user
        ? res.status(404).json({mesage: 'No user with that ID'})
        : res.json({
            user,
            grade: await grade(req.params.userId),
        })
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
}