import React from 'react'
import { courses } from '../../dummyData/courses'
const ProducFixed = () => {
    const {
        img,
        accessType,
        certification,
        price,
        length } = courses[0];

    return (
        <div className="product-cta__buynow">
            <img className='product-cta__buynow--top' src={img} alt="top img" />
            <div className="product-cta__buynow--bottom">
                <div className="product-cta__buynow--bottom--price">
                    {price}
                </div>
                <input
                    type="submit"
                    value="add to cart"
                    className="product-cta__buynow--bottom--addtocart"
                />
                <div className="product-cta__buynow--bottom--points">
                    <strong>
                        <u>
                            Course Includes
                        </u>
                    </strong>
                </div>
                <div className="product-cta__buynow--bottom--points--medium">
                    <li>length: {length}</li>
                    <li>access: {accessType}</li>
                    <li>certification: {certification}</li>
                </div>
            </div>
        </div>
    )
}

export default ProducFixed