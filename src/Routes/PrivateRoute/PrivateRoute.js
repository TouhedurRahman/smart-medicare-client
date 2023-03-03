import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
   let { user ,isLoading  } = useContext(AuthContext)
    const location = useLocation();
    if( isLoading){
        return <progress className="progress w-56"></progress>
    }
    if ( !user.email   ) {
       return <Navigate to="/user/login" state={{ from: location }} replace />  
    }
    return children;
};

export default PrivateRoute;