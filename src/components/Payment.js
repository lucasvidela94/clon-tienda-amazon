import React, { useState } from "react"
import "./Payment.css"
import { useStateValue } from "./Stateprovider"
import CheckoutProduct from "./CheckoutProduct"
import { Link } from "react-router-dom"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import { getTotalSum } from "./Reducer"

function Payment() {
  const [{ basket, user }] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const handleSubmit = (e) => {}

  const handleChange = (event) => {
    //Escucha los cambios dentro del elemento Card
    //Muestra los errores a medida que el usuario tipea los detalles
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Cesto de compras (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Seccion de direccion */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Direccion de envio:</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>Direccion de envio</p>
            <p>Ciudad de envio</p>
            <p></p>
          </div>
        </div>
        {/* Seccion de items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
            {/* Productos dentro del basket */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Seccion de pagos */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Metodos de pago</h3>
          </div>
          <div className="payment__details">
            {/* Metodologia de pago de tarjetas */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Orden total : {value}</h3>}
                  decimalScale={2}
                  value={getTotalSum(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
