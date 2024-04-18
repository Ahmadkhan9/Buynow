const express = require('express')
const router = express.Router()
const AuthController = require('./../Controller/AuthController')

router.route('/signup').post(AuthController.signUp)

router.route('/login').post(AuthController.logIn)
module.exports = router