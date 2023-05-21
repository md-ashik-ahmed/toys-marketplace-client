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
import ViewDetails from './Components/ViewDetails/ViewDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


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
      },
      {
        path : "/details/:id",
        element : <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://toy-marketplace-server-md-ashik-ahmed.vercel.app/marketplace/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto bg-amber-50'>
   <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </React.StrictMode>,
 </div>
)
