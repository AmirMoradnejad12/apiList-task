import React, { useState } from "react";
import Category from "./categoriy";
import Search from "./search/searc-section";
import ShowData from "./showdata";

export default function Dashboard({data}){
    
  let info = data.entries;

  const [dashbordInfo , setDashbordInfo] = useState({
    data:info , 
    activeCategory:"all"
  });
  let setData =(selectedData ,selectedCategry)=>{
    setDashbordInfo( {data:selectedData , activeCategory:selectedCategry} )          
  }


return(
    <>
      <Category data={info}  activeCategory={dashbordInfo.activeCategory} setData ={setData}/>
      <div className="info__wrapper">
        <Search data={info} />
        <ShowData dashbordInfo={dashbordInfo} />
      </div> 
    </>
    )
}