import React from 'react';
import {Navigate} from "react-router-dom";

function Admin(props) {
    if (localStorage.token){
        return <div className={"container"}>
                    Admin
                </div>
    }else{
        return <Navigate to = {-1} />
    }

};

export default Admin;