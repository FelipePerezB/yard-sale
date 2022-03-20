import { useState } from "react";

const initialState = {
  newUsers:[],
  homeProductsCategory:"All",
  cart:[],
  orders:[],
  user:{},
  navCartIsOpen:false,
  menuIsOpen:false
}

const useInitialState = () =>{
  const [state, setState] = useState(initialState)

  const setHomeProductCategory = (category) => {
    setState({
      ...state,
      homeProductsCategory:category
    })
  }

  const setUser = ({email,password,userName}, bool=false) =>{
    setState({
      ...state,
      user:{
        userName:userName,
        email:email,
        password:password,
      },
    })
    if(bool){
      const newUser = {
        userName:userName,
        email:email,
        password:password
      }
      state.newUsers.push(newUser)
    }
  }

  console.log(state)
  
    // const createAccount = (newUser) =>{
    //   setState({
    //     ...state,
    //     newUsers:[
    //       ...state.newUsers,
    //       newUser        
    //     ],
    //   })
    // }


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
      navCartIsOpen:visiibility,
      menuIsOpen:false

      
    })
  }
  const changeMenuVisibility = (canOpenAgain=true) => {
    const visiibility=(canOpenAgain) ? !state.menuIsOpen : false
    setState({
      ...state,
      menuIsOpen:visiibility,
      navCartIsOpen:false,
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
  console.log(state)



  return {
  state,
  addToCartFunction,
  deleteToCartFunction,
  isInTheCart,
  changeCartVisibility,
  changeMenuVisibility,
  setUser,
  setOrder,
  setHomeProductCategory,
  // createAccount,
  }
}

export default useInitialState