import React from 'react'
import skincare from '../../../../assets/skincare.png'

const Skincare = () => {
  return (
    <div className="w-96 h-64 beige flex justify-center items-center text-4xl pinkish great-vibes">
        <img src={skincare} alt='hourglass' className="w-40 h-40 object-cover"/>
        Skincare
    </div>

  )
}

export default Skincare
