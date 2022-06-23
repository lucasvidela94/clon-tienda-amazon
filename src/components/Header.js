/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import { Link } from "react-router-dom"
import { useStateValue } from "./Stateprovider"
import { auth } from "../firebase"

function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__nav">
        <FmdGoodOutlinedIcon className="header__locationIcon" />
        <div className="header__option">
          <span className="header__optionOne">Enviar a </span>
          <span className="header__optionTwo">Argentina</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>
      {/* {user ? "sign in" : "sign out"}<Cuentas y listas */}

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionOne">
              {user ? user.email : "Hola,identificate"}
            </span>
            <span className="header__optionTwo">
              {user ? "Cerrar sesión" : "Cuentas y listas"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionOne">Devoluciones</span>
          <span className="header__optionTwo">y Pedidos</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
