import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import './index.css'
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './Shop.jsx';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <Shop />
//     </RouterProvider>
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router}>
      <Shop />
    </RouterProvider>
  </StrictMode>
)
