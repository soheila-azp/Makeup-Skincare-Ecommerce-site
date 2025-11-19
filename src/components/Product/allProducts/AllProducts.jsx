import React from 'react'
// import { useState } from 'react'
import ProductsList from '../ProductsList'
import FilterSortBar from '../filter/FilterSortBar'

const AllProducts = () => {
    // const [filters, setFilters] = useState({});
  return (
    <div>
        <h1 className='ml-8 mt-8 text-4xl mb-4 great-vibes text-indigo-900'>All products</h1>
        {/* <hr/> */}
        {/* <FilterSortBar/> */}
      <ProductsList/>
    </div>
  )
}

export default AllProducts
