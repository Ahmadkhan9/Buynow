import React from 'react'
import { GridContainer, GridColumn1, GridColumn2, Button } from './AdminDashboard.style'
import { Outlet } from 'react-router-dom'
const AdminDashboard = () => {
  return (
    <GridContainer>
        <GridColumn1>
            <Button>Dashboard</Button>
            <Button>Users</Button>
            <Button>Products</Button>
            <Button>Update Products</Button>
            <Button>Create Products</Button>
        </GridColumn1>
        <GridColumn2>
            <Outlet/>
        </GridColumn2>
    </GridContainer>
  )
}

export default AdminDashboard