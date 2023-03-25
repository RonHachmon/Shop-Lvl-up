import React from 'react';
import ProductsContextProvider from './contexts/Products';
import Main from './components/Main';
/* <TasksContextProvider> */
// </TasksContextProvider>

const App = () => {
  return (
    <ProductsContextProvider>
        <Main />
    </ProductsContextProvider>
  );
}

export default App;
