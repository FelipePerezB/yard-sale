import { useState } from 'react';

const initialState = {
  newUsers: [],
  homeProductsCategory: 'All',
  cart: [],
  orders: [],
  actualProduct: undefined,
  user: {},
  navCartIsOpen: false,
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setHomeProductCategory = (category) => {
    setState({
      ...state,
      menuIsOpen: false,
      homeProductsCategory: category,
    });
  };

  const setUser = ({ email, password, userName }, bool = false) => {
    setState({
      ...state,
      navCartIsOpen:false,
      menuIsOpen: false,
      user: {
        userName: userName,
        email: email,
        password: password,
      },
    });
    if (bool) {
      const newUser = {
        userName: userName,
        email: email,
        password: password,
      };
      state.newUsers.push(newUser);
    }
  };

  const addToCartFunction = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const deleteToCartFunction = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((element) => element.id !== id),
    });
  };

  const changeCartVisibility = (canOpenAgain = true) => {
    const visiibility = canOpenAgain ? !state.navCartIsOpen : false;
    setState({
      ...state,
      navCartIsOpen: visiibility,
      menuIsOpen: false,
    });
  };
  const changeMenuVisibility = (forceClose = false) => {
    setState({
      ...state,
      menuIsOpen: forceClose ? !forceClose : !state.menuIsOpen,
      navCartIsOpen: false,
    });
  };

  const isInTheCart = (id) => {
    return state.cart.some((element) => element.id === id);
  };

  const setOrder = () => {
    const date = new Date();
    const orderDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    let products = state.cart;

    setState({
      ...state,
      navCartIsOpen: false,
      orders: [
        ...state.orders,
        {
          products: [state.cart],
          price: state.cart.length > 0 ? state.cart.reduce((price, item) => price + item.price, 0) : 0,
          date: orderDate,
          numberOfArticles: products ? products.length : 0,
        },
      ],
      cart: [],
    });
  };

  const setActualProduct = (product) => {
    setState({
      ...state,
      actualProduct: product,
      navCartIsOpen:false,
    });

  };

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
    setActualProduct,
  };
};

export default useInitialState;
