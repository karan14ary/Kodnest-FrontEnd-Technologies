import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Csk from './pages/Csk'
import Rcb from './pages/Rcb'
import Mi from './pages/Mi'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route index element={<Home/>}/>
      <Route path='csk' element={<Csk/>} />
      <Route path='mi' element={<Mi/>}/>
      <Route path='rcb' element={<Rcb/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



