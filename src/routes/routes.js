import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ManageAllOrders from "../Components/Conditional/ManageAllOrders/ManageAllOrders";
import MyOrder from "../Components/Conditional/MyOrder/MyOrder";
import Home from "../Components/Home/Home";
import Login from "../Components/LogIn/Login";
import Main from "../layout/Main/Main";

{
    /* <Route exact path='/'>
<Home></Home>
</Route>
<Route path='/home'>
<Home></Home>
</Route>
<Route path='/login'>
  <Login></Login>
</Route>
<Route path='/myOrder'>
  <MyOrder></MyOrder>
</Route>
<Route path='/ManageAllOrders'>
  <ManageAllOrders></ManageAllOrders>
</Route>
<Route path='/AddANewService'>
  <AddANewService></AddANewService>
</Route>
<PrivateRoute path='/placeOrder/:serviceId'>
  <PlaceOrder></PlaceOrder>
</PrivateRoute>
<PrivateRoute path='/placeOrder'>
  <PlaceOrder></PlaceOrder>
</PrivateRoute>
<Route path='*'>
<NotFound></NotFound>
</Route> */
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
        ],
    },
]);
export default routes;
