import React from 'react';

export default function Product({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}
