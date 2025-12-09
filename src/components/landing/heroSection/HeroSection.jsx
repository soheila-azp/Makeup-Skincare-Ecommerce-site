import React from 'react'
import Sales from './Sales'
import Skincare from './categories/Skincare'
import Makeup from './categories/Makeup'
import Haircare from './categories/Haircare'
import Newest from './sliders/Newest'
import Bestsellers from './sliders/Bestsellers'
import heroImage from '../../../assets/heroImage.jpg'

const HeroSection = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row items-center justify-evenly mt-10'>
        <div className="relative w-full md:w-[900px] h-[450px] overflow-hidden">
          <img
            src={heroImage}
            alt="products Image"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-start text-2xl md:text-5xl font-medium text-left px-6 sm:px-10 pb-10 leading-snug max-w-[600px] typing great-vibes pinkish">
            Beauty & Skincare Products <br /> from Around the World
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Sales />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-evenly mt-20 gap-6 sm:gap-4'>
        <div><Skincare /></div>
        <div><Makeup /></div>
        <div><Haircare /></div>
      </div>

      <div className='mt-10 ml-12 text-3xl great-vibes text-indigo-900'>
        Newest Products
      </div>
      <Newest />

      <div className='mt-10 ml-12 text-3xl great-vibes text-indigo-900'>
        Best sellers
      </div>
      <Bestsellers />
    </div>
  )
}

export default HeroSection;
