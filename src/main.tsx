import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ProductPage from "./views/ProductPage.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./services/query.ts";
import './index.css'
import '../styled-system/styles.css'
import CategoryPage from "./views/CategoryPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/products/:id",
        element: <ProductPage/>,
    },
    {
        path: "/categories/:id",
        element: <CategoryPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
