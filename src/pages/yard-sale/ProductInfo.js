import React, {useContext} from 'react';
import Button from '@components/Button';
import ProductDescription from '@components/ProductDescription';
import Header from '@containers/Header';
import Main from '@containers/Main';
import Space from '@components/Space';

import Image from 'next/image';
import AppContext from '@context/AppContext';
import add from "@icons/add-to-shopping-cart.svg";
import added from "@icons/added.png";
import Head from 'next/head';

function ProductInfo() {
  const {state, addToCartFunction, deleteToCartFunction, isInTheCart} = useContext(AppContext);
  const product = state.actualProduct;

  if(product){
    var image = isInTheCart(product.id) ? added : add;
    var text = isInTheCart(product.id) ? "Remove to the cart" : "Add to the cart";
    var buttonClass = isInTheCart (product.id) ? "drop-button-white" : "drop-button";
  }


  const AddToCartButton = (product)=>{
    if(isInTheCart(product.id)){
      deleteToCartFunction(product.id);      
    } else{
      addToCartFunction(product);
    }
  };

  return (
    <>
      {
        (product)
          ? <>
          <Head>
            <title>Product info | Yard Sale</title>
          </Head>
          <Header />
          <Main type="main-header">
            <ProductDescription
              img={product.images[0]}
              price={"$"+product.price}
              article={product.title}
              description={product.description}
            />
            <Space />
            <Button buttonClass={buttonClass} buttonFunction={()=>AddToCartButton(product)}>
              <Image alt="cart icon" src={image} width={100} height={30}/>
              {text}
            </Button>
          </Main>
          </>
          : null
      }
    </>
  );
}

export default ProductInfo;
