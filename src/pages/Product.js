import React from 'react'
import ProducFixed from '../components/productinfo/ProducFixed';
import ProductCta from '../components/productinfo/ProductCta';
import ProductFeatures from '../components/productinfo/ProductFeatures';

const Product = () => {
  return (
    <>
      <ProductCta/>
      <ProductFeatures/>
      <ProducFixed/>
    </>
  )
}

export default Product;