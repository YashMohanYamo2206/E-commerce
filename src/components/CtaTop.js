import React from "react";
import { Link } from "react-router-dom";
import { ctaTop } from "../dummyData/courses";

const CtaTop = () => {
    return (
        <div className="cta-top">
            <div className="cta-top__img"></div>
            <div className="cta-top__textBox">
                <div className="cta-top__textBox--title">{ctaTop.title}</div>
                <div className="cta-top__textBox--adText">{ctaTop.adText}</div>
                <div className="cta-top__textBox--tagLine">{ctaTop.tagline}</div>
                <Link to = "/product">
                    <input
                        type="submit"
                        className="cta-top__textBox--button"
                        value={ctaTop.buttonTitle}
                    />
                </Link>
            </div>
        </div>
    );
}

export default CtaTop;