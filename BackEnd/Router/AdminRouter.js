const express = require('express')
const router = express.Router()
// const AuthController = require('./../Controller/AuthController')
const AdminController = require('./../Controller/AdminController')
// const ReciptController = require('./../Controller/ReciptController')
router.route('/gettopsellingitem').get(AdminController.getTopSellingItem)
router.route('/getlastmonthsales').get(AdminController.getLastMonthSales)
router.route('/getbasicinfo').get(AdminController.getBasicAdminDashboardInfo)

module.exports = router