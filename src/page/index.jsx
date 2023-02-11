import React from "react";
import { useAppContext } from "../store/store";
import Layout from "../componets/Layout";
import Book from "../componets/book";

function Index(){
    const store= useAppContext();
    return(
        <Layout>
            {
            store.items.map((item)=>(
           <Book key={item.id} item={item}/>
            ))
            
            }
            </Layout>
    )
}

export default Index;