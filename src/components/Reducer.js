export const initialState = {
  basket: [],
  user: null,
}

export const getTotalSum = (basket) =>
  basket?.reduce((total, item) => item.price + total, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `No se puede remover el producto (id: ${action.id}) ya que no esta dentro de la cesta`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export default reducer
