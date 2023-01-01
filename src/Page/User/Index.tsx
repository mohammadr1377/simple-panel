import {useEffect} from "react"
import { GetUsers } from "./_srv"
export default function UserPage(){
    useEffect(()=>{
        GetUsers()
        .then(res=>{})
        .catch(err=>{})
    },[])
    return(
        <h3>کاربران</h3>
    )
}