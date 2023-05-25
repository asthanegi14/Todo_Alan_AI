import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { CartProvider } from 'react-use-cart';

import { Router } from '@reach/router';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <CartProvider>
            <Router>
                <App path="/"/>
                <Cart path="/cart" />
            </Router>
    </CartProvider>
    </BrowserRouter>
)