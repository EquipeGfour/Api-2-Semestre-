import React from "react";
export const navigationRef = React.createRef<any>();
export const navigate = (routeName,params)=>{
    if (navigationRef.current){
        navigationRef.current?.navigate(routeName,params)
    }
}