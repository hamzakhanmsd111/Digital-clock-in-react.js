import React, { useState } from "react";
import   './App.css'


 const Digitalclock=()=>{

    let time=new Date().toLocaleTimeString();

    const[Ctime,setCTime]=useState(time);

    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCTime(time)

    }
    setInterval(UpdateTime,1000)


    return(
        <div className="container">

        <h1>{Ctime}</h1>
        </div>
    )
 }
 export default Digitalclock;