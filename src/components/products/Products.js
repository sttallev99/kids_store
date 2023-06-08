import React, { useContext, useEffect } from 'react';

import Product from './Product';
import data from '../../dummyData'
import './products.css'


const Products = () => {

  return (
      //TODO: MEMORIZE PRODUCT STATE TO AVOID RE-RENDER
    <div className='productsWrapper'>
        {data.map(p => <Product key={p.id} product={p} />)}
    </div>
  )
}

export default Products
