import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import './index.css'
import 'react-multi-carousel/lib/styles.css';

import { Provider } from 'react-redux';
import store from './store/store.jsx';
import ShopApplicationWrapper from './pages/ShopApplicationWrapper';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     <RouterProvider router={router}>
//       <Shop />
//     </RouterProvider>
//   </StrictMode>
// )

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
