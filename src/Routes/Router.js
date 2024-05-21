import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
 const App = React.lazy(()=> import('../App'))
 const Categories = React.lazy(()=> import('../components/Categories/Categories'))
 const Authentication = React.lazy(()=> import('../routesPages/Authentication/Authentication'))
 const CheckOut = React.lazy(()=> import('../components/checkout/checkout.component'))
 const Shop = React.lazy(()=> import('../routesPages/Shop/Shop'))
 const Category = React.lazy(()=> import('../components/Category/category.component'))
 const AdminDashboard = React.lazy(()=> import('../components/AdminDashboard/AdminDashboard'))
 const Index = React.lazy(()=> import('../components/AdminDashboard/DefaultPage/Index.component'))
const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index : true,
                element : (
                    <Suspense fallback={<div>...loading</div>}>
                <Categories/>
                </Suspense>
            )
            },
            {
                path : 'dashboard/admin',
                element : (
                    <Suspense fallback={<div>...loading</div>}>
                <AdminDashboard/>
                </Suspense>
            ),
                children : [
                    {
                        index:true,
                        element: (
                            <Suspense fallback={<div>...loading</div>}>
                <Index/>
                </Suspense>
                        
                    )
                    }
                ]
            },
            {
                path : 'auth',
                element : (
                
                <Suspense fallback={<div>...loading</div>}><Authentication/></Suspense>
            
            )
            },{
                path : 'shop',
                element : (
                <Suspense fallback={<div>...loading</div>}>
                <Shop/>
                </Suspense>
            )
            },
            {
                path : 'shop/:category',
                element : <Suspense fallback={<div>...loading</div>}><Category/></Suspense>
            },
            {
                path : 'checkout',
                element : <Suspense fallback={<div>..loading</div>}><CheckOut/></Suspense>

            }
        ]
    }
])

export default router