import React from 'react'
import './CheckoutProduct.css'
import { useStatevalue } from '../StateProvider/StateProvider'

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStatevalue();

    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct_image" src={image} alt="productimage" />
        <div className="checkoutProduct_Info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating).fill().map((_)=><span>⭐</span>)
                }
            </div>
            <button className='checkoutProduct_remove' onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct