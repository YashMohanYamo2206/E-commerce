import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
    return (
        <Link to="/auth">
            <input className="header__right--login" type="submit"
                value="Login" />
        </Link>
    );
}

export default HeaderLogin;