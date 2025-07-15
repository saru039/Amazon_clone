import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format';
import { useStatevalue } from '../StateProvider/StateProvider';
import { getbasketTotal } from '../StateProvider/reducer';

const Subtotal = () => {
  const [{ basket }] = useStatevalue();

  return (
    <div className='subtotal'>
      <NumericFormat
        value={getbasketTotal(basket)}
        displayType="text"
        thousandSeparator
        decimalScale={2}
        prefix="₹"
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} item): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
