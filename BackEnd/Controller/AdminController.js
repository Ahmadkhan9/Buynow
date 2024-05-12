const catchAsync = require("../Utils/catchAsync");
const Recipt = require('./../Models/ReciptsModel')
exports.getTopSellingItem = catchAsync(async (req,res,next)=> {
    const getValues = await Recipt.aggregate([
        {
            $lookup: {
                from : 'users',
                localField : 'user',
                foreignField : '_id',
                as : 'users'
            }
        },
        {
            $addFields : {
                users : {
                    $arrayElemAt : ["$users",0]
                }
            }
        },
        {
            $lookup: {
                from : 'products',
                localField : 'products',
                foreignField : '_id',
                as : 'prod'
            }
        },
        {
            $unwind :  "$prod",
        },
        {
            $group : {
                _id : "$prod._id",
                name : {$first :"$prod.name"},
                totalSales :{
                    $sum : "$totalAmount"
                },
                price : {$first : "$prod.price"},
                totalSales : { $sum : 1}
            }
        },
        {
            $sort : { totalSales : -1}
        },
        {
            $limit : 5
        }
    ])
    res.status(200).json({
        result : getValues
    })
})
exports.getLastMonthSales = catchAsync(async (req, res,next)=> {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const LastMonthSales = await Recipt.aggregate([

        {
            $lookup : {
                from : 'products',
                localField : 'products',
                foreignField : '_id',
                as : 'prod'
            }
        },{
            $match : {
                "PurchasedOn" : {
                    $gte : new Date(year, month - 1 , 2),
                    $lte : new Date(year, month, 1)
                }
            }
        },
        {
            $group : {
                _id : null,
                lastMonthSales : { $sum : "$totalAmount"}
            }
        }
    ])
    res.status(200).json({
        LastMonthSales
    })
})
exports.getBasicAdminDashboardInfo = catchAsync(async (req,res,next)=>{
    const Info = await Recipt.aggregate(
        [
            {
              $group: {
                _id: null,
                totalSales : {$sum : "$totalAmount"},
                totalOrders : {$sum : 1},
                totalUser : {$addToSet : "$user"},
                pendingOrders : {$sum : {$cond : [{$eq : ["$OrderStatus" , "pending"]}, 1 , 0]}},
                completedOrders : {$sum : {$cond : [{$eq : ["$OrderStatus" , "delivered"]}, 1 , 0]}}
                
              }
            },{
              $project: {
                totalSales : 1,
                totalOrders : 1,
                totalUser : {$size : "$totalUser"},
                pendingOrders : 1,
                completedOrders : 1,
              }
            }
          ]
    )
    res.status(200).json({
        Info
    })
})
