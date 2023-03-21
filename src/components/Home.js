import React, { useState } from "react";
import Button from "./Button";
import classes from "./Home.module.css";
// import Demo from './Demo'

function Home() {

    const [res, setRes] = useState("")

    const buttons = [
        "AC", "Del", "/100", "/", 
        "7", "8", "9", "*", 
        "4", "5", "6", "-", 
        "1", "2", "3", "+", 
        "0", "="
    ];

    const findval = () => {
        // console.log('finval', res)
        if(!res) {
            alert("Please insert any number")
            return
        }
        let result = Function("return "+ res)()
        setRes(result.toString())
    }

    const handler = (arg) => {
        // console.log("🚀 ~ file: Home.js:22 ~ handler ~ arg:", arg)
        if(arg == "AC") setRes("")
        else if(arg == "=") findval()
        else if(arg == "Del") {
            let n = res.length
            if(n>0) setRes(res.slice(0,n-1))
        } 
        // else if (arg == "%") {
        //     let n = res.length
        //     if(n>0) {
        //     console.log("here % n", n)
        //     console.log("here % value", res)
        //     console.log("here % value slice", res.slice(2,1))
        //     }
        //     // setRes(res / 100)
        // }
        else setRes(res.concat(arg))
        // console.log('here', res)
    }

    return (
        <div className={ classes.home }>
            <div className={ classes.inner }>
                <div className={ classes.result }>
                    <div className={ classes.resbox }>
                        { res }
                    </div>
                </div>
                <div className={ classes.btns }>
                    {buttons.map((element, idx) => {
                        return <Button key={idx} handler={handler} value={element}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
