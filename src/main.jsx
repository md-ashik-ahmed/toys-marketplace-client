import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Blogs from './Components/Blogs/Blogs';
import AddToys from './Components/Add Toys/AddToys';
import MyToys from './Components/My Toys/MyToys';
import AllToys from './Components/All Toys/AllToys';
import AuthProvider from './Components/Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children:[
      
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/addtoys",
        element : <AddToys></AddToys>
      },
      {
        path : "/mytoys",
        element : <MyToys></MyToys>
      },
      {
        path : "/alltoys",
        element : <AllToys></AllToys>
      },
      {
        path : "/blogs",
        element : <Blogs></Blogs>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </React.StrictMode>,
 </div>
)
