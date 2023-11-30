const Workout = require('../models/workoutModel')
const mongoose = require ('mongoose')


//Get All Workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//Get a Single Workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    //Check If the Id is a Valid MongoDb Id. If not valid respond with error
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}



//Create a Workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    
    let emptyFields = []
    if(!title){
        emptyFields.push('title')
        
    }

    if(!load){
        emptyFields.push('load')
    }

    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    //add document to database
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title,load,reps, user_id})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



//Delete a Workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

     //Check If the Id is a Valid MongoDb Id. If not valid respond with error
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)

}




//Update a Workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

      //Check If the Id is a Valid MongoDb Id. If not valid respond with error
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)


}



module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}