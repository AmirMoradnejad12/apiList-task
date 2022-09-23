import React from "react";
import ShowRow from "../showrow";

export  default function SearchResult({close , isOpen , children}){
    
    let closeResult = ()=>{
        close();
    }
    if(!isOpen){
        return;
    }

    return(
        <>  
                
                {children}
        </>
 

    )

}