import React,{useState} from "react";
import UserContext from './UserContext';
import adidas from '../assets/adida.jpg';
import adidas1 from '../assets/adida1.jpg';
import adidas2 from '../assets/adida2.jpg';
import adidas3 from '../assets/adida3.jpg';
import adidas4 from '../assets/adida4.jpg';
import adidas5 from '../assets/adida5.jpg';
import adidas6 from '../assets/adida6.jpg';
import adidas7 from '../assets/adida7.jpg';
import adidas8 from '../assets/adida8.jpg';
import nike from '../assets/nike.jpg';
import nike1 from '../assets/nike1.jpg';
import nike2 from '../assets/nike2.jpg';
import nike3 from '../assets/nike3.jpg';
import nike4 from '../assets/nike4.jpg';
import nike5 from '../assets/nike5.jpg';
import nike6 from '../assets/nike6.jpg';
import nike7 from '../assets/nike7.jpg';
import nike8 from '../assets/nike8.jpg';
import puma from '../assets/puma.jpg';
import puma1 from '../assets/puma1.jpg';
import puma2 from '../assets/puma2.jpg';
import puma3 from '../assets/puma3.jpg';
import puma4 from '../assets/puma4.jpg';
import puma5 from '../assets/puma5.jpg';
import puma6 from '../assets/puma6.jpg';
import puma7 from '../assets/puma7.jpg';
import ree from '../assets/ree.jpg';
import ree1 from '../assets/ree1.jpg';
import ree2 from '../assets/ree2.jpg';
import ree3 from '../assets/ree3.jpg';
import ree4 from '../assets/ree4.jpg';
import ree5 from '../assets/ree5.jpg';
import ree6 from '../assets/ree6.jpg';
const UserContextProvider = ({children})=>{
    const [user,setuser] = useState('hello');
    const [loginfo,setloginfo] = useState(false);
    const logdetails = {
        getusername : 'Ajay',
        getpassword:'password123'
    }
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
    const [Buy,setBuy] = useState(0);
    const contextvalue ={
        user,
        setuser,
        loginfo,
        setloginfo,
        logdetails,
        shoes,
        Buy,setBuy
    }
     return(
        <UserContext.Provider value={contextvalue}  >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;