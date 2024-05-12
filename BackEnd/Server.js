const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const mongoose = require('mongoose')
const os = require('node:os')
const cluster = require('node:cluster')


const DB = process.env.DB.replace('<PASSWORD>' , process.env.DB_PASSWORD) 
mongoose.connect(DB).then(()=> console.log('database connected'))



if(cluster.isPrimary){
    const numOfProcessors = os.cpus().length
    for(let i = 0 ; i < numOfProcessors ; i++) {
        cluster.fork()
    }
}else{
    const app = require('./App')
    const Port = process.env.PORT || 3000
    console.log(process.pid)
    app.listen(Port , ()=> {
        console.log('server is running')
    })
}