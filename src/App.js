import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home'
import Login from './Components/Login/Login';
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Book from './Components/Dashboard/Book';
import BookingList from './Components/Dashboard/BookingList';
import Review from './Components/Dashboard/Review';
import OrderList from './Components/Dashboard/OrderList';
import AddServices from './Components/Dashboard/AddServices';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import ManageService from './Components/Dashboard/ManageService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
   const [loggend, setLoggend] = useState({});

   return (
      <UserContext.Provider value={[loggend, setLoggend]}>
         <Router>
            
            <Switch>
               <Route exact path="/" component={Home} />
               
               <Route exact path="/login" component={Login} />
               <PrivateRoute exact path="/dashboard">
                  <Dashboard />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/book/:id">
                  <Book/>
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/bookinglist">
                  <BookingList />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/review">
                  <Review />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/orderlist">
                  <OrderList />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/addservices">
                  <AddServices />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/makeadmin">
                  <MakeAdmin />
               </PrivateRoute>
               <PrivateRoute exact path="/dashboard/manageservice">
                  <ManageService />
               </PrivateRoute>
            </Switch>
         </Router>
      </UserContext.Provider>
   );
}

export default App;