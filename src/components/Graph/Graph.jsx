import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend} from 'chart.js'
import { useGetLastMonthSales } from '../../Hooks/useGetLastMonthSale'
Chartjs.register(
    CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend
)
const Graph = () => {
    const options = {
        Responsive : true,
        interaction : {
            mode : 'nearest'
        },
        plugins : {
           
            legend : {
                display : false,
                position : "top"
            },
            title : {
                display :true,
                text : "Sale Info",
                color : 'white'
            },
            scales : {
            }
        }
    }
    const data = {
        labels : ["Jan" , "Feb" , "March" , "April", "May", "June", "July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
            {
                label : "Steps",
                data : [1100,12000,10000,2000,120000,180000,29000,93000,78000,10000,1000,120000],
                borderColor : ["rgb(75,192,192)"],
                backgroundColor : ["rgba(255,99,132,0.9)"],
                borderWidth : 1
            }
        ]
    }
  return (
    <Bar options={options} data={data} />
  )
}

export default Graph