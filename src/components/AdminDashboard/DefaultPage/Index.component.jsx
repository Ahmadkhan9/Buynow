import React from 'react'
import Graph from '../../Graph/Graph'
import {ReactComponent as Arrow} from './../../../assets/arrow-up-right.svg'
import {ReactComponent as Bag} from './../../../assets/bag-dash.svg'
import {ReactComponent as Dollar} from './../../../assets/currency-dollar.svg'  
import {ReactComponent as Users} from './../../../assets/people.svg'  
import './Index.style.css'
import { useGetBasicAdminPanelInfo } from '../../../Hooks/useGetBasicAdminPanelInfo'
import { useGetLastMonthSales } from '../../../Hooks/useGetLastMonthSale'
import { useGetTopSellingProducts } from '../../../Hooks/useGetTopSellingProducts'
const Index = () => {
  const {data} = useGetBasicAdminPanelInfo()
  const {data : lastmonth} = useGetLastMonthSales()
  const {data : topProd} = useGetTopSellingProducts()
  console.log(topProd)
  return (
    <>
    <div className='Infos-container'>
      <div className="Info-container">
        <div className='svg-container'>
          <Bag style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Total Orders</span>
          <span className='value'>{data?.Info[0].totalOrders}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
      <div className="Info-container">
        <div className='svg-container'>
          <Dollar style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Total Sales</span>
          <span className='value'>{data?.Info[0].totalSales}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
      <div className="Info-container">
        <div className='svg-container'>
          <Users style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Total Users</span>
          <span className='value'>{data?.Info[0].totalUser}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
      <div className="Info-container">
        <div className='svg-container'>
          <Users style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Pending Orders</span>
          <span className='value'>{data?.Info[0].pendingOrders}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
      <div className="Info-container">
        <div className='svg-container'>
          <Users style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Completed Orders</span>
          <span className='value'>{data?.Info[0].completedOrders}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
      <div className="Info-container">
        <div className='svg-container'>
          <Users style={{color : '#1877F2', width : '30px' , height : '30px'}}/>
        </div>
        <div className='panel-info'>
          <span className='title'>Last Month Sale</span>
          <span className='value'>{lastmonth?.LastMonthSales[0]?.lastMonthSales}</span>
        </div>
        <div className='hike-info'>
          <Arrow className='arrow'/>
          <p className='hike-value'>1.65%</p>
        </div>
      </div>
    </div>
    <div style={{width : '100%' , display : 'flex' , justifyContent : 'center'}}>
      <div style={{width : '70%', height : '70%'}}>
      <Graph/>
      </div>
      </div>
      <div style={{width : '100%' , display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '50%'}}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Units Sold</th>
    </tr>
  </thead>
  <tbody>
   {topProd?.result?.map((item , idx) => (
    <tr>
    <th scope="row">{idx}</th>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.totalSales}</td>
  </tr>
   ))}
  </tbody>
</table>
        </div>
      </div>
  </>
  )
}

export default Index