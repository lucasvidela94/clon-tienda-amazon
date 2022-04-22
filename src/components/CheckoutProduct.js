/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./CheckoutProduct.css"
import { useStateValue } from "./Stateprovider"

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    //Busca remover el elemento del array Basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div>
      <div className="CheckoutProduct">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p>{title}</p>
          <p className="checkoutProduct__price">
            <small>Є</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Retirar del carrito</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
