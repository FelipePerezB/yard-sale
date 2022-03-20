import React, {useContext} from 'react'
import Order from '@components/Order'
import Product from '@components/Product'
import Header from '@containers/Header'
import Main from '@containers/Main'
import AppContext from '@context/AppContext'
import Warning from '@components/Warning'

function MyOrders() {
  const {state} = useContext(AppContext)
  const orders = state.orders
  return (
    <>
      <Header/>
      <Main type='main-header'>
        {(!orders[0]) ? <Warning text="No has hecho ninguna orden." instruction="Presiona 'Checkout' en el carro de compras para hacer una."/> : null}
        <section>
          {orders.map((order)=>{
            console.log(order)
            return <Order order={order}/>}
          )}
        </section>
      </Main>
    </>
  )
}

export default MyOrders
