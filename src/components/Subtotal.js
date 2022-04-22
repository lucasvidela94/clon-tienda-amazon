import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./Stateprovider"
import { getTotalSum } from "./Reducer"

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              Esta orden contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalSum(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button>Tramitar pedido</button>
    </div>
  )
}

export default Subtotal
