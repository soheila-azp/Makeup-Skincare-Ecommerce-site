import React from 'react'
import cart from '../../../../assets/icons/cart.svg'

const Cart = () => {
  return (
 <div className=" w-40 h-8 flex items-center px-3">
    <img src={cart} alt='cart' width={25} height={25} />
<h3 className='text-white'>My cart</h3>
</div>
  )
}

export default Cart
