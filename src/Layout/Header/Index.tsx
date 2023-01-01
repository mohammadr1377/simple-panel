import {useEffect, useState} from "react"
import removeItemLocalStorage from "../../utils/removeItemLocalStorage";
import getItemLocalStorage from "../../utils/getItemLocalStorage";

export default function IndexHeader() {
    const [userName,setUserName]:[string,Function] =useState(  localStorage.getItem("userName") || "")
    useEffect(() => {
   
        getItemLocalStorage("userName", storageEventHandler);
      }, []);
    
      function storageEventHandler(value: string) {
        
        setUserName(value);
       
      }
    function handelerLogOut() {
        removeItemLocalStorage("isLogin")
        removeItemLocalStorage("userName")
       
    }
    return(
        <>
        <header className="h-10 mt-2 rounded-lg  w-full justify-between bg-blue-50 shadow-2xl flex items-center p-2">
            <p>{userName}</p>
            <button onClick={handelerLogOut}> خروج</button>
        </header>
        </>
    )
}