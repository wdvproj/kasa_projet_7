import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Logement from '../../pages/Logement'
import Error from '../../pages/Error'

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            loader: () => {
                return fetch('/datas/logements.json')
            },
            errorElement: <Error />,
        },
        {
            path: '/logement/:logementId',
            element: <Logement />,
            loader: () => {
                return fetch('/datas/logements.json')
            },
            errorElement: <Error />,
        },
        { path: '/apropos', element: <About /> },
        { path: '*', element: <Error /> },
    ])
    return <RouterProvider router={router} />
}

export default Router
