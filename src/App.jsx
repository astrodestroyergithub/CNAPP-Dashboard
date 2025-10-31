import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './assets/data.json';
import { initialize } from './store/dashboardSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CNAPPDashboard from './components/CNAPPDashboard';
import Portfolio from './components/Portfolio';
import Blogs from './pages/blogs/Blogs';
import Tips from './components/Tips';
import Home from './components/Home';

export default function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/dashboard",
      element: <CNAPPDashboard/>
    },
    {
      path: "/portfolio",
      element: <Portfolio/>
    },
    {
      path: "/blogs",
      element: <Blogs/>
    },
    {
      path: "/tips",
      element: <Tips/>
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(initialize(data)); 
  },[dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
