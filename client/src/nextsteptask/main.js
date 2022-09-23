import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import UseFetch from "./usefetch";
import Layout from "./layout";
import GetLoading from "./getloading";
import HandleError from "./handleerror";
import "./style.css";

export default function Main(){
  

    let baseUrl2= "https://api.publicapis.org/entries";
    let baseUrl="http://localhost:5000/api/entries"
    let response = UseFetch(baseUrl);

 
    return(
        <Layout>
            {response.loading 
                ?<GetLoading/>
                :response.status.isError
                    ?<HandleError error={response.status.reciveError}/>
                    :response.data
                        ?<Dashboard data ={response.data}/>
                        :"null"
            }

        </Layout>
    )
}