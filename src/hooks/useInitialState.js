import { useState } from "react";

const initialState = {
  homeProductsCategory:"All",
  user:{},
  cart:[],
  orders:[],
  navCartIsOpen:false
}

const useInitialState = () =>{
  const [state, setState] = useState(initialState)

  const setHomeProductCategory = (category) => {
    setState({
      ...state,
      homeProductsCategory:category
    })
    console.log(category)
  }

  const setUser = ({email,password,userName}) =>{
    // console.log(state.user)
    // if(email){
    //   setState({
    //     ...state,
    //     user:{
    //       ...state.user,
    //       email:email
    //     }
    //     })
    // } else if(password){
    //   setState({
    //     ...state,
    //     user:{
    //       ...state.user,
    //       password:password
    //     }
    //     })
    // }
    // if(userName){
    //   setState({
    //     ...state,
    //     user:{
    //       ...state.user,
    //       userName:userName
    //     }
    //     })
    // }

    setState({
      ...state,
      user:{
        // name: (userName) ? userName : state.user.name,
        // email: (email) ? email : state.user.email,
        // password: (password) ? password : state.user.password,
        userName:userName,
        email:email,
        password:password,
        // isUserCreated:(state.user.userName!==undefined && state.user.email!==undefined && state.user.password!==undefined) ? true : false
      }
    })

  }

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

  const changeCartVisibility = (canOpenAgain=true) => {
    const visiibility=(canOpenAgain) ? !state.navCartIsOpen : false
  
    setState({
      ...state,
      navCartIsOpen:visiibility
      
    })
  }

  const isInTheCart = (id) =>{
    return state.cart.some((element)=>(element.id===id))
  }

  const setOrder = () =>{
    const date = new Date()
    const orderDate = (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    let finalPrice=0
    let products= state.cart

    setState({
      ...state,
      orders:[
        ...state.orders,
        {
          products:[state.cart],
          price: (state.cart.length > 0) 
            ? finalPrice=state.cart.reduce((price, item) =>(price+item.price),0)
            : 0
          ,
          date:orderDate,
          numberOfArticles: (products) ? products.length : 0
        }
      ]
      ,
      cart:[],
    })
  }

  console.log(state.user)



  return {
  state,
  addToCartFunction,
  deleteToCartFunction,
  isInTheCart,
  // isVisible,
  changeCartVisibility,
  setUser,
  setOrder,
  setHomeProductCategory
  }
}

export default useInitialState