import React from 'react';
import { Routes, Route , Link } from 'react-router-dom';
import './App.css';
import { useState ,useContext} from 'react';
import Profile from './components/profile';
import {AiOutlineShoppingCart,AiFillHome} from 'react-icons/ai';
import Login from "./components/login";
import adidas from './assets/adida.jpg';
import adidas1 from './assets/adida1.jpg';
import adidas2 from './assets/adida2.jpg';
import adidas3 from './assets/adida3.jpg';
import adidas4 from './assets/adida4.jpg';
import adidas5 from './assets/adida5.jpg';
import adidas6 from './assets/adida6.jpg';
import adidas7 from './assets/adida7.jpg';
import adidas8 from './assets/adida8.jpg';
import nike from './assets/nike.jpg';
import nike1 from './assets/nike1.jpg';
import nike2 from './assets/nike2.jpg';
import nike3 from './assets/nike3.jpg';
import nike4 from './assets/nike4.jpg';
import nike5 from './assets/nike5.jpg';
import nike6 from './assets/nike6.jpg';
import nike7 from './assets/nike7.jpg';
import nike8 from './assets/nike8.jpg';
import puma from './assets/puma.jpg';
import puma1 from './assets/puma1.jpg';
import puma2 from './assets/puma2.jpg';
import puma3 from './assets/puma3.jpg';
import puma4 from './assets/puma4.jpg';
import puma5 from './assets/puma5.jpg';
import puma6 from './assets/puma6.jpg';
import puma7 from './assets/puma7.jpg';
import ree from './assets/ree.jpg';
import ree1 from './assets/ree1.jpg';
import ree2 from './assets/ree2.jpg';
import ree3 from './assets/ree3.jpg';
import ree4 from './assets/ree4.jpg';
import ree5 from './assets/ree5.jpg';
import ree6 from './assets/ree6.jpg';
import UserContext from './context/UserContext';


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
                        setsearch(e.target.value);
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
        </Routes>
      </div>
      
     
    
  )
}

const Home = (props)=>{

    const shoes = [
    {
        id:0,
        name:'adidas',
        price: 223,
        proimg:adidas,
        sex:'uni-sex',
    },
    {
        id:1,
        name:'adidas',
        price: 256,
        proimg:adidas1,
        sex:'uni-sex',
    },
    {
        id:2,
        name:'adidas',
        price: 259,
        proimg:adidas2,
        sex:'uni-sex',
    },
    {
        id:3,
        name:'adidas',
        price: 208,
        proimg:adidas3,
        sex:'uni-sex',
    },
    {
        id:4,
        name:'adidas',
        price: 234,
        proimg:adidas4,
        sex:'uni-sex',
    },
    {
        id:5,
        name:'adidas',
        price: 143,
        proimg:adidas5,
        sex:'uni-sex',
    },
    {
        id:6,
        name:'adidas',
        price: 69,
        proimg:adidas6,
        sex:'uni-sex',
    },
    {
        id:7,
        name:'adidas',
        price: 156,
        proimg:adidas7,
        sex:'uni-sex',
    },{
        id:8,
        name:'adidas',
        price: 299,
        proimg:adidas8,
        sex:'uni-sex',
    },
    {
        id:9,
        name:'nike',
        price: 278,
        proimg:nike,
        sex:'uni-sex',
    },
    {
        id:10,
        name:'nike',
        price: 267,
        proimg:nike1,
        sex:'uni-sex',
    },
    {
        id:11,
        name:'nike',
        price: 256,
        proimg:nike2,
        sex:'uni-sex',
    },
    {
        id:12,
        name:'nike',
        price: 230,
        proimg:nike3,
        sex:'uni-sex',
    },
    {
        id:13,
        name:'nike',
        price: 270,
        proimg:nike4,
        sex:'uni-sex',
    },
    {
        id:14,
        name:'nike',
        price: 160,
        proimg:nike5,
        sex:'uni-sex',
    },
    {
        id:15,
        name:'nike',
        price: 360,
        proimg:nike6,
        sex:'uni-sex',
    },
    {
        id:16,
        name:'nike',
        price: 450,
        proimg:nike7,
        sex:'uni-sex',
    },
    {
        id:17,
        name:'nike',
        price: 150,
        proimg:nike8,
        sex:'uni-sex',
    },
    {
        id:18,
        name:'puma',
        price: 269,
        proimg:puma,
        sex:'uni-sex',
    },
    {
        id:19,
        name:'puma',
        price: 180,
        proimg:puma1,
        sex:'uni-sex',
    },
    {
        id:20,
        name:'puma',
        price: 370,
        proimg:puma2,
        sex:'uni-sex',
    },
    {
        id:21,
        name:'puma',
        price: 890,
        proimg:puma3,
        sex:'uni-sex',
    },
    {
        id:22,
        name:'puma',
        price: 250,
        proimg:puma4,
        sex:'uni-sex',
    },
    {
        id:23,
        name:'puma',
        price: 250,
        proimg:puma5,
        sex:'uni-sex',
    },
    {
        id:24,
        name:'puma',
        price: 250,
        proimg:puma6,
        sex:'uni-sex',
    },
    {
        id:25,
        name:'puma',
        price: 250,
        proimg:puma7,
        sex:'uni-sex',
    },
    {
        id:26,
        name:'reebok',
        price: 250,
        proimg:ree,
        sex:'uni-sex',
    },
    {
        id:27,
        name:'reebok',
        price: 250,
        proimg:ree1,
        sex:'uni-sex',
    },
    {
        id:28,
        name:'reebok',
        price: 250,
        proimg:ree2,
        sex:'uni-sex',
    },
    {
        id:29,
        name:'reebok',
        price: 250,
        proimg:ree3,
        sex:'uni-sex',
    },
    {
        id:30,
        name:'reebok',
        price: 250,
        proimg:ree4,
        sex:'uni-sex',
    },
    {
        id:31,
        name:'reebok',
        price: 250,
        proimg:ree5,
        sex:'uni-sex',
    },
    {
        id:32,
        name:'reebok',
        price: 250,
        proimg:ree6,
        sex:'uni-sex',
    }
];
     const [idey,setidey] = useState(0);
     const [Count,setCount] = useState(1);
     
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
                              setidey(shoe.id);
                            }}>Preview <AiOutlineShoppingCart className="cartico" /></button> 
                        </div>
                    </div>
                    </div>
                )
                })
        }</>}
        </div>
        </div>
      </div>
      <div className='sidebar'>
          <div className='side-pad'>
            <div className='side-img'>
              <img 
               className='side-pre'
               src={shoes[idey].proimg}
               alt=''
              />
            </div>
            <div className='side-det'>
                <div className='side-det-pad'>
                    <h3 className="header" style={{
                        fontSize: `30px`,
                        fontFamily: 'italic',
                        color:'rgb(235, 107, 107)'
                    }}>{shoes[idey].name.toUpperCase()}</h3>
                    <h3 className="sex-def" style={{

                    }}>{shoes[idey].sex.toLocaleUpperCase()}<sup style={{
                        fontSize:`10px`,
                        color: 'rgb(240, 240, 45)'
                    }}>Suitable for both sex</sup></h3>
                    <h3 className="para">${shoes[idey].price*Count}</h3>
                    <div className='cart'>
                        <div className='cart-pad'>
                            <button className="decreament" onClick={()=>{
                                    if (Count <= 0){
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
                    <button className='buynow'>Buy Now</button>
                    
                </div>
            </div>
          </div>
      </div>
      </>
     
    )
}

export default App;
