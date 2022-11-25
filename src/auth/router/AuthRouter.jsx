import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import { Layout } from '../layouts/Layout';
import { routes } from './routes'

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/auth" element={<Layout />}>
            {
                routes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))
            }
        </Route>
    </Routes>
  )
}
