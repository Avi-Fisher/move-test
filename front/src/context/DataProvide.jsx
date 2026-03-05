import React,{createContext, useState} from "react";
import { res } from "../api/api";


const DataContext = createContext()

function DataProvide({ children }) {

    const [data,setData] = useState(res)
    
    return (
        <DataContext value={{ data ,setData }}>
            {children}
        </DataContext>
    )
}

export { DataContext, DataProvide }