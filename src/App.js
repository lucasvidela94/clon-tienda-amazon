import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"
import { useEffect, useState } from "react"
import { auth } from "./firebase"
import { useStateValue } from "./components/Stateprovider"
import Payment from "./components/Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51KrUkFHywGcC8SYtZkBHY2YiMuLqu3zJVZAQD3vt9PRQDYi4IRPR1aG7ZaklMxg6FDF3fqos8hbWBC45IiAA8SUP009yFgko7J"
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //SOLAMENTE CORRE UNA VEZ QUE EL COMPONENTE CARGO
    auth.onAuthStateChanged((authUser) => {
      console.log("El usuario esta logeado", authUser)

      if (authUser) {
        //Ya se logeo
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //El usuario se deslogueo
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                {" "}
                <Payment />{" "}
              </Elements>,
            ]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
