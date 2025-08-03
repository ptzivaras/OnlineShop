import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import './index.css'
import 'react-multi-carousel/lib/styles.css';

import { Provider } from 'react-redux';
import store from './store/store.jsx';
import ShopApplicationWrapper from './pages/ShopApplicationWrapper';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ShopApplicationWrapper />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
