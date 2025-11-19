import React from 'react'
import ProductsList from '../../../Product/ProductsList'
import ProductsSlider from '../../../Product/ProductsSlider'

const Bestsellers = () => {
  return (
    <div>
      {/* <ProductsList page={1} limit={5} sort="bestselling" /> */}
      <ProductsSlider/>
    </div>
  )
}

export default Bestsellers
