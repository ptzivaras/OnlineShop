import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import './index.css'
import 'react-multi-carousel/lib/styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
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
