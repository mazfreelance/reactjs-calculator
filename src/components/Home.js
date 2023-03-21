import React, { useState } from "react";
import Button from "./Button";
import classes from "./Home.module.css";
// import Demo from './Demo'

function Home() {

    const [res, setRes] = useState("")

    const buttons = [
        "C", "9", "/", "8", "7", "6", "*",
        "5", "4", "3", "+", "2", "1", "0",
        "-", ".", "Del", "="
    ];

    const findval = () => {
        let result = Function("return "+ res)()
        setRes(result.toString())
    }

    const handler = (arg) => {
        // console.log("🚀 ~ file: Home.js:22 ~ handler ~ arg:", arg)
        if(arg == "C") setRes("")
        else if(arg == "=") findval()
        else if(arg == "Del") {
            let n = res.length
            if(n>0) setRes(res.slice(0,n-1))
        }
        else setRes(res.concat(arg))
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
                        return <Button handler={handler} value={element}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
