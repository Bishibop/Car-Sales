import React from 'react';
import { useSelector } from 'react-redux';

const Total = props => {
  const totalPrice = useSelector(state => {
    return state.car.price + state.additionalPrice;
  });
  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

export default Total;
