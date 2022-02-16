import React from 'react';
import { courses } from '../../dummyData/courses';
// import {}
import { SiCheckmarx } from "react-icons/si";

const ProductFeatures = () => {
    const {features} = courses[0];
    const makeFeatures = features.map((feature) => {
        return (
            <div className="product-features__feature" key={feature}>
                <div className="product-features__feature--check">
                    <SiCheckmarx />
                </div>
                {feature}
            </div>
        );
    });

  return (
    <div className="product-features">
        <div className="product-features__title">Topis Covered</div>
        <div className="product-features__list">{makeFeatures}</div>
    </div>
  )
}

export default ProductFeatures