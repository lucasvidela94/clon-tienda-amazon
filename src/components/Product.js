/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./Product.css"
import { useStateValue } from "./Stateprovider"

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Є</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket}> Añadir al carrito</button>
    </div>
  )
}

export default Product
