import React,{useState} from "react";
import UserContext from './UserContext';
const UserContextProvider = ({children})=>{
    const [user,setuser] = useState('hello');
    const [loginfo,setloginfo] = useState(false);
    const logdetails = {
        getusername : 'Ajay',
        getpassword:'password123'
    }
    const contextvalue ={
        user,
        setuser,
        loginfo,
        setloginfo,
        logdetails
    }
    return(
        <UserContext.Provider value={contextvalue} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;