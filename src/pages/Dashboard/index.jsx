import React, { useState, useEffect } from 'react';

import api from '../../api';
import Cart from '../../pages/Cart'
import CartItem from '../CartItem';

const Dashboard = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  },[]);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CartItem key={product.id} product={product}/>
      ))}
      <Cart/>
    </main>
  );
}

export default Dashboard;
