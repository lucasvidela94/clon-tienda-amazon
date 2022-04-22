/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import "./Login.css"

function Login() {
  const history = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/")
      })
      .catch((error) => alert(error.message))
    //Funciones de firebase
  }

  const register = (e) => {
    e.preventDefault()

    //Funciones de registro de firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //si se creo satisfactoriamente el usuario se imprime la autentificacion
        console.log(auth)
        if (auth) {
          history("/")
        }
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Iniciar sesión</h1>
        <form>
          <h5>Dirección de e-mail o número de teléfono móvil</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Iniciar sesión
          </button>
        </form>
        <p>
          Al identificarte aceptas nuestras Condiciones de uso y venta. Consulta
          nuestro Aviso de privacidad y nuestras Aviso de Cookies y Aviso sobre
          publicidad basada en los intereses del usuario.
        </p>
        <button onClick={register} className="login__registerButton">
          Crea tu cuenta de Amazon
        </button>
      </div>
    </div>
  )
}

export default Login
