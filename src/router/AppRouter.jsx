import { Route, Routes } from 'react-router-dom'
import { authRoutes, Layout } from '../auth'
import { InventoryLayout, inventoryRoutes } from '../inventory'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="*" element={ <InventoryLayout />}>
            {
                inventoryRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))
            }
        </Route>

        <Route path="/auth" element={<Layout />}>
            {
                authRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))
            }
        </Route>


    </Routes>
  )
}
