import React from "react";
import HeaderCenter from "./headercenter";
import HeaderLeft from "./headerLeft"
import HeaderRight from "./headerRight";

const Header = () => {
    return (
        <div className="header">
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </div>
    );
}

export default Header;