import React from "react";
import { Navigate } from "react-router-dom";
import auth from '../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth";
import PageLoading from "./PageLoading";

const ProtectedRoute = ({ children }) => {
    const [user, isLoading] = useAuthState(auth);

    // console.log("Check user in Private: ", user);
    if(isLoading){
        return <PageLoading/>
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;