import React, { useEffect, useState } from "react";
const Prac3=()=>{
    const [time,settime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            settime(new Date());
        },1000);
        return()=>{
            clearInterval(timer);
        }
    },[])
return (
    
    <div>
        <h1>Welcome to CHARUSAT</h1>
        <p>
            Time:{time.toLocaleTimeString()}
        </p>
        <p>
            Date:{time.toLocaleDateString()}
        </p>
    </div>
)
}
export default Prac3;
