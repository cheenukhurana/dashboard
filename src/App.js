import React from 'react';
import {AuthProvider} from './auth/AuthProvider'
import { UserProvider } from './auth/UserProvider'
import Home from './Home'
import Login from './auth/Login'
import Signup from './auth/Signup'
import PasswordForgot from './auth/PasswordForgot'
import PasswordReset from './auth/PasswordReset'
import PrivateRoute from './routes/PrivateRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute'
import TopMenu from './TopMenu'
import Category from './Category'

// import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <div>
            <TopMenu />
            <PrivateRoute exact path = "/" component={Home}></PrivateRoute>
            <UnauthenticatedRoute exact path='/signup' component={Signup} />
            <UnauthenticatedRoute exact path='/login' component={Login} />
            <UnauthenticatedRoute exact path='/password/new' component={PasswordForgot} />
            <UnauthenticatedRoute path='/reset/:id' component={PasswordReset} />
            <PrivateRoute path="/category/:id" component={Category} />
          </div>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
