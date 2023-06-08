import React from 'react'
import Header from '../../components/header/Header'
import DiscountProducts from '../../components/discountProducts/DiscountProducts'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <DiscountProducts />
        <hr className='sectionSeparator' />
        <Products />
        <Footer />
    </>
  )
}

export default Home
