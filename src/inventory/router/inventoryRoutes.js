import { AddProduct, Dashboard } from '../pages';

export const inventoryRoutes = [
    {
        path: "",
        element: Dashboard
    },
    {
        path: "addProduct",
        element: AddProduct
    }
]