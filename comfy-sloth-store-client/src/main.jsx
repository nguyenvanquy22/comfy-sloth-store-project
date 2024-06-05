import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './contexts/app_context.jsx'
import { ProductsProvider } from './contexts/products_context.jsx'
import { FilterProvider } from './contexts/filter_context.jsx'
import { CartProvider } from './contexts/cart_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </AppProvider>
  </React.StrictMode>,
)
