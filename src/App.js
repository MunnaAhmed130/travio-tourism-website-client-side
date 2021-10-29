import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/LogIn/Login';
import MyOrder from './Components/Conditional/MyOrder/MyOrder';
import ManageAllOrders from './Components/Conditional/ManageAllOrders/ManageAllOrders';
import AddANewService from './Components/Conditional/AddANewService/AddANewService';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
        <Switch>
            <Route exact path='/'>
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
            <Route path='*'>
            <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
