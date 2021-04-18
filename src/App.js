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
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import ContactUs from './components/ContactUs/ContactUs';
import OurTeam from './components/OurTeam/OurTeam';

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
          <PrivateRoute path='/orderCheckout/:id'>
            <OrderCheckout />
          </PrivateRoute>
          <PrivateRoute path='/myOrderList'>
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path='/addReview'>
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path='/allOrderList'>
            <AllOrderList />
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService />
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path='/manageServices'>
            <ManageServices />
          </PrivateRoute>
          <Route path='/contactUs'>
            <ContactUs />
          </Route>
          <Route path='/ourTeam'>
            <OurTeam />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
