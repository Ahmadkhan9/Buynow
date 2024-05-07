import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend  } from 'chart.js'
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
                data : [1100,2200,8000,7500,1100,200,0,15000,7600,9888,12000,1000],
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