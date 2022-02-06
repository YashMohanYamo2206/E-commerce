import React from "react";
import HeaderLeft from "./headerLeft"
import HeaderRight from "./headerRight";

const Header = () => {
    return (
        <div className="header">
            <HeaderLeft/>
            <div className="header__center">center</div>
            <HeaderRight/>
        </div>
    );
}

export default Header;