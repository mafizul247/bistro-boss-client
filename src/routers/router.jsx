import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../Layout/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <PrivateRoute><Menu /></PrivateRoute>
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome />
            },
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'adminhome',
                element: <AdminRoutes><AdminHome /></AdminRoutes>
            },
            {
                path: 'allusers',
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
            {
                path: 'addItem',
                element: <AdminRoutes><AddItem /></AdminRoutes>
            },
            {
                path: 'manageitems',
                element: <AdminRoutes><ManageItems /></AdminRoutes>
            }
        ]
    }
])

export default router;