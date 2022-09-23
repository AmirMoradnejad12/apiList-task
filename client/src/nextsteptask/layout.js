import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";


export default function Layout(props){


 
    return(
        <div className="layout">
            {props.children}
        </div>
    )
}