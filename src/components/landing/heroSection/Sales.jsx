import React from 'react'
import ProductsList from '../../Product/ProductsList'
import SaleProducts from '../../Product/SaleProducts'

const Sales = () => {
  return (
    <div className='beige pt-8' style={{ width: '400px', height: '450px' }} >
      <div className='bg-indigo-500 text-center text-white pt-3 h-12 w-48 mx-auto great-vibes'>Amazing Deals</div>
      <SaleProducts page={1} limit={5} />
    </div>
  )
}

export default Sales
