const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const mongoose = require('mongoose')


const DB = process.env.DB.replace('<PASSWORD>' , process.env.DB_PASSWORD) 
mongoose.connect(DB).then(()=> console.log('database connected'))



const app = require('./App')

const Port = process.env.PORT || 3000
console.log(Port)
app.listen(Port , ()=> {
    console.log('server is running')
})