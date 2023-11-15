import React from 'react';
import { Routes, Route , Link, Navigate } from 'react-router-dom';
import './App.css';
import { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './components/profile';
import {AiOutlineShoppingCart,AiFillHome} from 'react-icons/ai';
import Login from "./components/login";
import UserContext from './context/UserContext';
import { isDisabled } from '@testing-library/user-event/dist/utils';


function App() {
    const {loginfo} =useContext(UserContext);
    const [search,setsearch] =useState('');
    const [trigger,settrigger] = useState(false);
    return (
    <div className='contain '>
      <div className='navbar'>
        <nav className='navigation'>
            <div className='logo'>
                <h2 className='logo-h'>ShoeZer</h2>
            </div>
            <div className='searchbox'>
                <input
                    className='aria-input'
                    type='text'
                    value={search}
                    onChange={(e)=>{
                        setsearch(e.target.value.toLowerCase());
                        settrigger(true);
                        }
                    }
                    placeholder='Search by brands'
                />
                
            </div>
            <div className='lists'>
                <AiOutlineShoppingCart className="cartnav" />
                <Link to='/hl' className='homebut'>
                    <AiFillHome  className='home'/>
                </Link>
                {loginfo ? <div className="profilejsx"><Profile/></div>: <Link to='/login' className='linked'>
                    <button className='login-button'>Login</button>
                </Link>}
                
            </div>
            
        </nav>
      </div>
        <Routes>
            <Route path='/hl' element={<Home prop1={search} prop2={trigger}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/Buy' element={<Buynow />} />
        </Routes>
      </div>
      
     
    
  )
}
const Home = (props)=>{
    const {shoes} = useContext(UserContext);
    const [idey,setidey] = useState(0);
    const navigate = useNavigate();
    const {setBuy} = useContext(UserContext);
    return(
        <>
        
        <div className='contents'>
        <div className='cont-pad'>
        <div className="shoe-cont">
            {props.prop2 ? <>{shoes.map((item)=>{
                if(item.name === props.prop1){
                    return(
                    <>
                        <div className="card" id={item.id}>
                    <div className="card-pad">
                        <div className="proimg">
                            <img
                             src={item.proimg}
                             alt=""
                             className="images"
                            
                             />
                        </div>
                        <div className="details">
                            <h3 className="header">{item.name.toLocaleUpperCase()}</h3>
                            <p className="sex-def">{item.sex}</p>
                            <p className="para">${item.price}</p>
                            <button className="addtobag" key={item.id} id={item.id} onClick={()=>{
                              setidey(item.id);
                            }}>Preview <AiOutlineShoppingCart className="cartico" /></button> 
                        </div>
                    </div>
                    </div>
                    </>)
                }else return null;
            })}</> : <>{shoes.map((shoe)=>{
                return(
                    <div className="card" id={shoe.id}>
                    <div className="card-pad">
                        <div className="proimg">
                            <img
                             src={shoe.proimg}
                             alt=""
                             className="images"
                            
                             />
                        </div>
                        <div className="details">
                            <h3 className="header">{shoe.name.toLocaleUpperCase()}</h3>
                            <p className="sex-def">{shoe.sex}</p>
                            <p className="para">${shoe.price}</p>
                            <button className="addtobag" key={shoe.id} id={shoe.id} onClick={()=>{
                              navigate('/Buy');
                              setidey(shoe.id);
                              setBuy(shoe.id);
                            }}>Buy Now <AiOutlineShoppingCart className="cartico" /></button> 
                        </div>
                    </div>
                    </div>
                )
                })
        }</>}
        </div>
        </div>
      </div>
      
      </>
     
    )
}


const Buynow = ()=>{
    const { Buy } = useContext(UserContext);
    const { shoes } = useContext(UserContext);
    const {loginfo} = useContext(UserContext);
    const [Count,setCount] = useState(1);
    return(
        <div id='side'>
            <div className='sidebar'>
            <div className='side-pad'>
            <div className='side-img'>
              <img 
               className='side-pre'
               src={shoes[Buy].proimg}
               alt=''
              />
            </div>
            <div className='side-det'>
                <div className='side-det-pad'>
                    <h3 className="header" style={{
                        fontSize: `30px`,
                        fontFamily: 'italic',
                        color:'rgb(235, 107, 107)'
                    }}>{shoes[Buy].name.toUpperCase()}</h3>
                    <h3 className="sex-def" style={{

                    }}>{shoes[Buy].sex.toLocaleUpperCase()}<sup style={{
                        fontSize:`10px`,
                        color: 'rgb(240, 240, 45)'
                    }}>Suitable for both sex</sup></h3>
                    <h3 className="para">${shoes[Buy].price*Count}</h3>
                    <div className='cart'>
                        <div className='cart-pad'>
                            <button className="decreament" onClick={()=>{
                                    if (Count <= 1){
                                        setCount(Count)
                                        
                                    }
                                    else(
                                        setCount(Count-1)
                                    )
                                }}>-</button>
                        <div className='countnum'><p >{Count}</p></div>
                                <button className="increament" onClick={()=>{
                                    setCount(Count+1)
                                }}>+</button><AiOutlineShoppingCart className="cartico" style={{
                                    height: `50px`,
                                    width:`30px`
                                }} />
                        </div>
                    </div>
                    {loginfo?<button className='buynow' >Continue to Shipping</button>:<button className='buynow1'>Login To Continue!!</button>}
                    
                </div>
            </div>
          </div>
      </div>
        </div>
    )
}

export default App;
