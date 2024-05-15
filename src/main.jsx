import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import MainLayout from './MainLayout'
import Root from './root'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const BASE_URL = 'https://127.0.0.1:8000/'

export const getGuestData = async ({ slug }) => {
  const response = await fetch( BASE_URL + 'guest/' + slug);
  const data = await response.json();
  console.log(data)
  return data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div className='w-full h-screen justify-center flex text-center text-8xl font-bold items-center bg-red-400 text-white'>404 Not Found</div>,
    children: [
      {
        path: ":slug",
        element: <MainLayout />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
)
