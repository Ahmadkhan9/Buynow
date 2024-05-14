const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const os = require('os')
const cluster = require('cluster')
const mongoose = require('mongoose')


const DB = process.env.DB.replace('<PASSWORD>' , process.env.DB_PASSWORD) 
mongoose.connect(DB).then(()=> console.log('database connected'))

if(cluster.isPrimary){

    for(let i = 0 ; i < os.cpus().length ; i++){
        cluster.fork()
    }

}else{
    const app = require('./App')
    
    const Port = process.env.PORT || 3000
    console.log(Port)
    app.listen(Port , ()=> {
        console.log('server is running')
    })
}
