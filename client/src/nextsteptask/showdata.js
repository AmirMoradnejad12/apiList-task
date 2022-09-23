import React from "react";
import ShowRow from "./showrow";

export default function ShowData({dashbordInfo}){
    
    return(
        <div className="api-info">
            <p className="selected_category-name">API List for :  {dashbordInfo.activeCategory}</p>
            <table className="table">
                <thead>
                            <tr>
                                    <th > API </th>
                                    <th> Description </th>
                                    <th> Link </th>
                                    <th> Category </th>       
                            </tr>
                </thead>
                <tbody>
                     {dashbordInfo.data.map((row , index)=>{
                                return <tr key={index}>
                                    <ShowRow items={row}/>
                                </tr>                    
                    })} 
                
                </tbody>
            </table>
        </div>
    )
   
}