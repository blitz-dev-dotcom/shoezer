import React,{useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext);
    return  <h3 style={{fontSize:`15px`}}>Hello,{user.username}</h3>
    
}