import React from 'react'

const SmallProductListItem = ({ product: { name, price } }) => {
  return (
    <p>
      Name: {name}, Price: ${price}
    </p>
  )
}

export default SmallProductListItem