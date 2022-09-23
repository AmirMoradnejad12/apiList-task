import React from "react";


export default function ShowRow({items}){
    
    let  { Auth ,HTTPS , Cors ,...filteredData} = items

    return(
        <>
        {   Object.keys(filteredData).map((key , index )=>{
            return <td  data-label={key}  key={index}> {filteredData[key]}</td>
        })
    
        }
        
        </> 
    ); 
   
   
}