import React from 'react'
import { useUserContext } from '../contexts/user_context'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { authenticated } = useUserContext()

    if (authenticated) {
        return children;
    }
    return <Navigate to='/' />;
}

export default PrivateRoute;