import React from 'react'
import './Products.css'
import {useStatevalue} from '../StateProvider/StateProvider'

const Product = ({id,title,image,price,rating}) => {

    const [{basket}, dispatch] = useStatevalue();

    const addToBasket = () => {
        dispatch({
            type: "ADD TO BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    }
  return (
    <div className='product'>
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating).fill().map((_)=>(<span>⭐</span>))
                }
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;