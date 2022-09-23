import React, { useRef } from "react";
import GroupBY from "./groubby";

export default function Category({data, activeCategory , setData}){

    let [groupByCategory , mainKeyList ] = GroupBY(data );
    let setCategoryData = (item) =>{
         let finalData = item =="all" ? data : groupByCategory[item];
         let selectedCategry = item;
         setData(finalData , selectedCategry)
    }

    return(
        <div className="category-list">
            <h2 className="category-list__title">Categories</h2>
        
            <div className={("all" == activeCategory) ? "category , active" : "category"} onClick={()=>setCategoryData("all")}>all </div>
            {
                mainKeyList.map( (item  ,index) =>{
                return <div className={(item == activeCategory) ? "category , active" : "category"} onClick={()=>setCategoryData(item)} key={index}>{item} </div>
                        })
            }

        </div>

    )

}