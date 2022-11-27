import { Dashboard } from "../../pages/Dashboard";

export const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: "fas fa-th-large",
        Element: Dashboard,
    },
    {
        path: '/addProduct',
        name: 'Productos',
        icon: "fas fa-box",
    },
    {
        path: '/perfil',
        name: 'Perfil',
        icon: "fas fa-user",
    },
]