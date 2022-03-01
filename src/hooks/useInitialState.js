import { useState } from "react";

const initialState = {
  cart:[],
  navCartIsOpen:false
}

const useInitialState = () =>{
  const [state, setState] = useState(initialState)

  // const [isVisible, showShoppingCart] = useState(false)

  const addToCartFunction = (payload) =>{
    setState({
      ...state,
      cart:[...state.cart,payload]
    })  
  }
  const deleteToCartFunction = (id) =>{
    setState({
      ...state,
      cart: state.cart.filter((element)=>element.id!==id)
    })
  }

  const changeCartVisibility = () => {
    const visiibility=!state.navCartIsOpen
    setState({
      ...state,
      navCartIsOpen:visiibility
      
    })
    // console.log(navCartIsOpen)
  }

  // let isOpen=false

  // const changeNavShoppingCartState = (state) =>(
  //   isOpen=state
  // )

  // console.log(isOpen)

  const isInTheCart = (id) =>{
    return state.cart.some((element)=>(element.id===id))
  }

  console.log(state)
  return {
  state,
  addToCartFunction,
  deleteToCartFunction,
  isInTheCart,
  // isVisible,
  changeCartVisibility
  }
}

export default useInitialState