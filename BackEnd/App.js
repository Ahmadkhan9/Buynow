const express = require('express')
const GlobelErrorHandler = require('./Controller/GlobalErrorHandler')
const app = express()
const ProductRouter = require('./Router/ProductRouter')
const cors = require('cors')
const morgan = require('morgan')
const UserRouter = require('./Router/UserRouter')
const CategoryRouter = require('./Router/CategoryRouter')
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('public/images'))
app.use(express.json())
app.use('/api/v1/user' , UserRouter)
app.use('/api/v1/product' , ProductRouter)
app.use('/api/v1/categories' , CategoryRouter)
app.use(GlobelErrorHandler)

module.exports = app