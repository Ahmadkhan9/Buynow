const AppError = require("../Utils/AppError")

const handleCastErrorDB = (err)=> {
    const message = `invalid ${err.path} : ${err.value}`
    return new AppError(message,400 )
}
const handleDuplicateErrorDB = (err)=> {
    const key = Object.keys(err.keyValue)
    console.log(key)
// const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
    const message = `Duplicate field ${key[0]} : ${err.keyValue[key[0]]}. please use another value`
    return new AppError(message , 400)
}
const handleValidationErrorDB = (err)=>{
    const erros = Object.values(err.errors).map(err => err.message)
    const message = `invalid input data.${erros.join('.')}`
    return new AppError(message,400)
}
// Error while we are in production 
const ProdError = (res , err)=> {
    // Operational , trusted Error that we have generated
    if(err.isOperational){
        res.status(err.statusCode).json({
            status : err.status,
            message : err.message,
        })
        // unknown error and dont want to leak detail to client
    }else{
        console.error('Error 🔥', err)
        res.status(500).json({
            status : 'error',
            message : 'something went wrong'
        })
    }
}
// Error when we are in Development
const DevError = (res , err)=> {
    res.status(err.statusCode).json({
        status : err.status,
        message : err.message,
        stack : err.stack,
        error : err
    })
}



module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
    if(process.env.NODE_ENV === 'development'){
        DevError(res , err)
    }else if(process.env.NODE_ENV === 'production'){
        if(err.name === 'CastError') err = handleCastErrorDB(err)
        if(err.code === 11000) err = handleDuplicateErrorDB(err)
        if(err.name === 'ValidationError') err = handleValidationErrorDB(err)
        ProdError(res , err)
    }
}