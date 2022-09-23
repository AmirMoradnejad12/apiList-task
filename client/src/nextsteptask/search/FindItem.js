import React, {useState } from "react";
import SearchResult from "./search-result";
import ShowRow from "../showrow";

export default function FindItem({data , item ,requestSearch}){
    
    const result = Object.values(data).filter(e => e.API === item);
    console.log("selected" , result );
    const [isResultOpen ,SteIsReesultOpen ] = useState(true)

    let closeResult= ()=>{
        SteIsReesultOpen(false);
        requestSearch("")
    }

    return(
        <SearchResult result={result} close ={closeResult} isOpen={isResultOpen} >
                    <div className="search-result">
                    <button  className="close__btn " onClick={()=>closeResult()}>close</button>
                        <p>Result for {item}:  </p>
                        {result.length>0 ? 
                                            <table className="table search-result__table">
                                                    <thead>
                                                                <tr>
                                                                        <th > API </th>
                                                                        <th> Description </th>
                                                                        <th> Link </th>
                                                                        <th> Category </th>       
                                                                </tr>
                                                    </thead>
                                                    <tbody>
                                                        {result.map((row , index)=>{
                                                                    return <tr key={index}>
                                                                        <ShowRow items={row}/>
                                                                    </tr>                    
                                                        })} 
                                                    
                                                    </tbody>
                                                </table>
                                            : <p>Not find !!!</p>
}
                       
                    </div>

        </SearchResult>
    )
}