import React from "react";
import logo from "../../imgs/logo.svg";
import { Link } from "react-router-dom";

const HeaderLeft = ()=>{
    return (
        <Link to="/" className="header__left">
            <img src = {logo} className="header__left--image" alt="logo"></img>
        </Link>
    )
}

export default HeaderLeft;