import React from 'react'
import './Checkout.css'
import { useStatevalue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'

const Checkout = () => {
  const [{basket}] = useStatevalue()
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4OmNKzgamRDUK1cOugsAndLLhWcaYny7ew&s" alt="ad" className="checkout_ad" />
        {
          basket.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>You have no item in your basket. To buy one  more items, Click "Add to basket" next to the item.</p>
            </div>
          ):(
            <div>
              <h2 className='checkout_title'>Your Shopping basket</h2>
              {
                basket.map((item)=>{
                  return(
                    <CheckoutProduct key={item.id} title={item.title} id={item.id} image={item.image} price={item.price} rating={item.rating}/>
                  )
                })
              }
            </div>
          )
        }
      </div>
      {basket.length > 0 && (
        <div className='checkout_right'>
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout