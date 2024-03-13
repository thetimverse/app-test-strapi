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
import ProductsPage from "./views/ProductsPage.tsx";
import CategoriesPage from "./views/CategoriesPage.tsx";

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
        path: "/products",
        element: <ProductsPage/>,
    },
    {
        path: "/categories/:id",
        element: <CategoryPage/>,
    },
    {
        path: "/categories",
        element: <CategoriesPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
