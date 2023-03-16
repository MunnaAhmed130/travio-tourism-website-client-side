// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyOrder from "./Components/Conditional/MyOrder/MyOrder";
import ManageAllOrders from "./Components/Conditional/ManageAllOrders/ManageAllOrders";
import AddANewService from "./Components/Conditional/AddANewService/AddANewService";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
// import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <RouterProvider router={routes} />
                {/* <Router>
          <Header></Header>
        <Switch>
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
            </Route>
        </Switch>
      </Router> */}
            </AuthProvider>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
