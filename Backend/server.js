const express = require('express') //Initialize Express App
require('dotenv').config()         //Load .env files that are not pushed to github
const workoutRoutes = require('./routes/workouts') //To keep the file clean we import our routes
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')

//Express App
const app = express()

//Middleware
app.use(express.json()) //Parse the response from server into json format 


//Connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(
    //listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('App running on port 4000 and Database Connected')
})
)
.catch((error) => {
    console.log(error)
})

// Register Routes
app.use('/api/workouts', workoutRoutes) //Utilize the routes we imported above. And they have /api/workout firstly.
app.use('/api/user', userRoutes)



