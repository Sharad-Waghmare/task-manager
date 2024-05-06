const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/userRoute');
const taskRouter = require('./router/taskRoute');
const projectRouter = require('./router/projectRoute');


const app = express();
require("dotenv").config();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false}));
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
})
.then(()=> console.log('mongodb connected!'))
.catch((error)=> console.log(error.message))

app.listen(PORT, ()=>{
    console.log(`server connected on ${PORT}`);
});


app.use('/user', userRouter);
app.use('/project', projectRouter)
app.use('/task', taskRouter);