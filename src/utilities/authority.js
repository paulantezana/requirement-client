import React from 'react';
import { Route, Redirect } from 'dva/router';
import decoder from 'jwt-decode';

// Authentication key use save token
const ATUH_KEY = "/&AV(";

// Get token
export const getAuthority = ()=> {
    let token = localStorage.getItem(ATUH_KEY);
    if (token === null){
        token = sessionStorage.getItem(ATUH_KEY);
    }
    return token;
};

// Set token
export const setAuthority = (token,remember) => {
    if(remember){
        localStorage.setItem(ATUH_KEY,token);
    }else{
        sessionStorage.setItem(ATUH_KEY,token);
    }
}

// Get user token
export const getAuthorityUser = ()=> decoder(getAuthority());

// Get profile
export const Authorized = () => getAuthorityUser().user.profile;

// Logout
export const destroy = ()=>{
    localStorage.clear();
    sessionStorage.clear();
};

// Custom private route
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        getAuthority()
            ? ( <Component {...props} /> )
            : ( <Redirect to={{
                pathname: "/user/login",
                state: { from: props.location }
            }}
          />
        )
      }
    />
);

//  export default { gettAuthority }