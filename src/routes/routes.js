import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddANewService from "../Components/Conditional/AddANewService/AddANewService";
import ManageAllOrders from "../Components/Conditional/ManageAllOrders/ManageAllOrders";
import MyOrder from "../Components/Conditional/MyOrder/MyOrder";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Main from "../layout/Main/Main";
import NotFound from "../Pages/NotFound/NotFound";

{
    /* <PrivateRoute path='/placeOrder/:serviceId'>
  <PlaceOrder></PlaceOrder>
</PrivateRoute>
<PrivateRoute path='/placeOrder'>
  <PlaceOrder></PlaceOrder>
</PrivateRoute>
<Route path='*'>
<NotFound></NotFound>
</Route>  */
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
                path: "/login",
                element: <Login />,
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
]);
export default routes;
