import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddANewService from "../Components/Conditional/AddANewService/AddANewService";
import ManageAllOrders from "../Components/Conditional/ManageAllOrders/ManageAllOrders";
import MyOrder from "../Components/Conditional/MyOrder/MyOrder";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../Pages/NotFound/NotFound";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/placeOrder/:serviceId",
                element: (
                    <PrivateRoute>
                        <PlaceOrder />
                    </PrivateRoute>
                ),
            },
            {
                path: "/placeOrder",
                element: (
                    <PrivateRoute>
                        <PlaceOrder />
                    </PrivateRoute>
                ),
            },

            {
                path: "/myOrder",
                element: <MyOrder />,
            },
            {
                path: "/manageAllOrders",
                element: <ManageAllOrders />,
            },
            {
                path: "/addANewService",
                element: <AddANewService />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
export default routes;
