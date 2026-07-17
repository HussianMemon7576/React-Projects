import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Collection from './Pages/Collection.jsx'
import Home from './Pages/Home.jsx'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
index : true,
element : <Home/>
    },{
      path : "collection",
      element : <Collection/>

    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
   <RouterProvider router = {router}/>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
   </Provider>
  </StrictMode>,
)
