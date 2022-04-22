/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81iRKKdmK-L._SX3000_.jpg"
        ></img>
        <div className="home__row">
          <Product
            id="45675435"
            title="Harry Potter y la piedra filosofal (Harry Potter 1)"
            price={20.88}
            image="https://images-na.ssl-images-amazon.com/images/I/81fS9LRN29L.jpg"
            rating={5}
          />
          <Product
            id="98726764"
            title="La Rueda del Tiempo nº 01/14 El ojo del mundo: La Rueda del Tiempo (Biblioteca Robert Jordan) (Spanish Edition)"
            price={23.12}
            image="https://images-na.ssl-images-amazon.com/images/I/91BrzYTawmL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="125636988"
            title="HP Elite ordenador de sobremesa Intel Core i5 de 3,1 GHz, 8 gb Ram, 1 TB de disco duro, DVDRW, monitor LCD de 19 pulgadas, teclado, ratón"
            price={187.0}
            image="https://m.media-amazon.com/images/I/718sn7oOcfL._AC_SY355_.jpg"
            rating={4}
          />
          <Product
            id="2311321258"
            title="Auriculares bluetooth"
            price={15.2}
            image="https://m.media-amazon.com/images/I/71nLhugmMoL._AC_SY355_.jpg"
            rating={4}
          />
          <Product
            id="12312701"
            title="Elden Ring - PlayStation 4"
            price={59.99}
            image="https://m.media-amazon.com/images/I/510bptgvHjL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="63190510"
            title="Boca Juniors Camisa Retro Fútbol Manga Corta Hombre Top"
            price={18.99}
            image="https://m.media-amazon.com/images/I/81-1d68oA5L._AC_UL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
