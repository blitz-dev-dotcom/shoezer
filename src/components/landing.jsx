import React from "react";
import './landing.css';
import back from '../assets/inback.png'
export default function landing(){
    return(
        <div className="container">
            <div className="pad">
                <div className="textpad">
                <div className="text"><h1>Welcome to <span id="span">ShoeZer</span> - Where Fashion Meets Footwear Excellence! </h1>
                <p style={{color:`rgb(181, 173, 173)`}}>Step into Style: Elevate Your Every Step with ShoeZer - Your Ultimate Destination for Trendsetting Footwear! Discover a curated collection of fashion-forward shoes that seamlessly blend comfort and chic designs. From casual kicks to statement stilettos, our diverse range caters to every taste and occasion.</p>
                </div>
                </div>
                <div className="image">
                    <img src={back}/>
                </div>
            </div>
        </div>
    )
}