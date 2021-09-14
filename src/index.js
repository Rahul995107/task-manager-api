const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter= require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () =>{
//     const task = await Task.findById('613f39167720dd3b220cf86a')
//     // // await task.populate('owner').execpopulate
//     console.log(task.owner)         
//     // // .owner) 

//     // const user = await User.findById('613e0a76415bd8c413dcf8ab')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user)
//                     // .tasks
// }

// main()