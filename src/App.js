import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import OrderCheckout from './components/Dashboard/OrderCheckout/OrderCheckout';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AllOrderList from './components/Dashboard/AllOrderList/AllOrderList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/orderCheckout/:id'>
            <OrderCheckout />
          </Route>
          <Route path='/myOrderList'>
            <OrderList />
          </Route>
          <Route path='/addReview'>
            <AddReview />
          </Route>
          <Route path='/allOrderList'>
            <AllOrderList />
          </Route>



          <Route path='/addService'>
            <AddService />
          </Route>
          <Route path='/makeAdmin'>
            <MakeAdmin />
          </Route>
          <Route path='/manageServices'>
            <ManageServices />
          </Route>



          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
