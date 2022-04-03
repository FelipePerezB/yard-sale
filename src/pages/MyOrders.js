import React, { useContext } from 'react';
import Order from '@components/Order';
import Header from '@containers/Header';
import Main from '@containers/Main';
import AppContext from '@context/AppContext';
import Warning from '@components/Warning';
import Head from 'next/head';

function MyOrders() {
  const { state } = useContext(AppContext);
  const orders = state.orders;
  return (
    <>
      <Head>
        <title>Orders | Yard Sale</title>
      </Head>
      <Header />
      <Main type="main-header">
        {!orders[0] ? <Warning text="No has hecho ninguna orden." instruction="Presiona 'Checkout' en el carro de compras para hacer una." /> : null}
        <section>
          {orders.map((order) => {
            return <Order key={order.date} order={order} />;
          })}
        </section>
      </Main>
    </>
  );
}

export default MyOrders;
