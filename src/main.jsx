import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import { CartProvider } from "./components/cart/CartContext"; 

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     <CartProvider>
      <App />
      </CartProvider>
  </StrictMode>
);
