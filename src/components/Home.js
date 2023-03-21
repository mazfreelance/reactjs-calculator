import React from "react";
import Button from "./Button";
import classes from "./Home.module.css";
// import Demo from './Demo'

function Home() {
    const buttons = [
        "C", "9", "/", "8", "7", "6", "*",
        "5", "4", "3", "+", "2", "1", "0",
        "-", ".", "Del", "="
    ];

    return (
        <div className={ classes.home }>
            <div className={ classes.inner }>
                <div className={ classes.result }>
                    <div className={ classes.resbox }>

                    </div>
                </div>
                <div className={ classes.btns }>
                    {buttons.map((element, idx) => {
                        return <Button value={element}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
