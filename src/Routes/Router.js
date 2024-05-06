import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Categories from "../components/Categories/Categories";
import Authentication from "../routesPages/Authentication/Authentication";
import Shop from "../routesPages/Shop/Shop";
import CheckOut from "../components/checkout/checkout.component";
import Category from "../components/Category/category.component";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import Index from "../components/AdminDashboard/Index/Index.component";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index : true,
                element : <Categories/>
            },
            {
                path : 'dashboard/admin',
                element : <AdminDashboard/>,
                children : [
                    {
                        index:true,
                        element: <Index/>
                    }
                ]
            },
            {
                path : 'auth',
                element : <Authentication/>
            },{
                path : 'shop',
                element : <Shop/>
            },
            {
                path : 'shop/:category',
                element : <Category/>
            },
            {
                path : 'checkout',
                element : <CheckOut/>
            }
        ]
    }
])

export default router