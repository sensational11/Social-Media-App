const router = require('express').Router();

const{
    getThoughts, getSingleThought, createThought, deleteThought, updateThought
} = require('../../controllers/thoughtController')

//routes for thoughts
router
.route('/')
.get(getThoughts)
.post(createThought)

router
.route('/:id')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)



router
.route('/thought/:thoughtId/reactions')
.post()
.delete()

module.exports = router;


