import React, { useState } from "react";

export default function SearchForm({requestSearch}) {
    const [inputValue, setInputValue] = useState("");
    const [inputErrore, setInputErrore] = useState(false);

    let getSearch = ()=>{
        
        inputValue ? requestSearch(inputValue) : setInputErrore(true)
    }
    let onType=(e)=> {
        setInputErrore(false)
        setInputValue(e.target.value)
    }

    return(
        <div className="search-wrapper">
               <div className="search">
                    <input type="text"  className="search__input" placeholder="search api name" onChange={ e=>onType(e)}/>
                    <img src={require('../img/search.png')} alt="search" onClick={()=>getSearch()}className="search__img"/>

                </div>
                {inputErrore && <p className="error-messaage">please inter a Api name </p>}

        </div>

    )
}