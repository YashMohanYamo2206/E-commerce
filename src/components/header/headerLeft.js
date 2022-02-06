import React from "react";
import logo from "../../imgs/logo.svg";

const HeaderLeft = ()=>{
    return (
        <div className="header__left">
            <img src = {logo} className="header__left--image"></img>
        </div>
    )
}

export default HeaderLeft;