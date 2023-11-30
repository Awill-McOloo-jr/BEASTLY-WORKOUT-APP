const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

//Require Auth for all workout Routes
router.use(requireAuth)


//Get All Workouts
router.get('/', getWorkouts)

//Get Single Workout
router.get('/:id', getWorkout)

//Post a new Workout
router.post('/', createWorkout)

//Delete a Workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)





module.exports = router