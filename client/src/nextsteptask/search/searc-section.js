import React, { useState } from "react";
import SearchForm from "./Search-form";
import FindItem from "./FindItem";

export default function SearchSection({data}) {
    const [searchItem , setSearchItem] = useState("");
    const [closeResult  , setCloseResult] =useState("")
    let requestSearch = (value)=>{
        console.log(value)

        setSearchItem(value)
    }
    return(
       <div className="header">
            <span className="active__category">List OF Api</span>
            <SearchForm  requestSearch = {requestSearch}/>
            {searchItem&&<FindItem  data ={data} item={searchItem} requestSearch={requestSearch} />}
       </div>
    )
}