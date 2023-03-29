import React from 'react';
import ProductsContextProvider from './contexts/Products';
import WhislistContextProvider  from './contexts/Products/wishlistContext';
import Main from './components/Main';
import Cart  from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* <TasksContextProvider> */
// </TasksContextProvider>

const App = () => {
  return (
    <ProductsContextProvider>
      <WhislistContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
        </WhislistContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
