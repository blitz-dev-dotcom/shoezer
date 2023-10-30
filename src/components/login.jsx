import React, {useState,useContext} from "react";
import './login.css';
import UserContext from "../context/UserContext";

export default function Login(){
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [log,setlog] = useState(false);

    const {setuser} = useContext(UserContext);
    const {setloginfo} = useContext(UserContext);
    const {logdetails} = useContext(UserContext);
    const HandleClick = (e)=>{
            e.preventDefault();
            if (username === logdetails.getusername && password === logdetails.getpassword){
                setuser({username,password});
            }
            else(alert('your login credentials are incorrect!'))
            setlog(true);
            setloginfo({log})
    }
    return(
        <div className="login-container">
            <div className="login-form">
                <div className="logoform">
                    <h1 className="loghead">ShoeZer</h1>
                </div>
                <div className="logform">
                    <div className="formdiv">
                        <form >
                            <input
                                className="in-name"
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={(e)=>{setusername(e.target.value)}}
                            />
                            <input 
                                className="in-pass"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}
                            />
                            <button className="logbut" onClick={HandleClick}>Log in</button>
                            <p className="signhead">Don't have an account ? <span>sign up</span></p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}