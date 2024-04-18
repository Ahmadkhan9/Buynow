import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
  import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './Context/User.context';
import { ProductProvider } from './Context/Product.context';
import { CartProvider } from './Context/Cart.context';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
  <RouterProvider router={router}>
    <App />
    <ReactQueryDevtools/>
    </RouterProvider>
    </CartProvider>
    </ProductProvider>
    </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
