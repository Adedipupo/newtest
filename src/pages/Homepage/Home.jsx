import React from 'react'
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';

export const Home = () => {
  return (
    <>
    <Header
      heading="Shop with us now!!!"
      subheading="One of the most trusted brand"
    />
    <br />
    <Product />
    </>
  )
}
