import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../../pages/About'
import Logement from '../../pages/Logement'
import Error from '../../pages/Error'
import logements from '../../../public/datas/logements.json'

describe('Error handling', () => {
    it('Missing caracter', () => {
        const router = createMemoryRouter(
            [
                {
                    path: '/apropos',
                    element: <About />,
                },
                {
                    path: '*',
                    element: <Error />,
                },
            ],
            {
                initialEntries: ['/apropo'],
            }
        )

        render(<RouterProvider router={router} />)

        // La page d'erreur 404 s'affiche
        expect(screen.getByRole('heading').textContent).toBe('404')
    })
    it('Wrong id', async () => {
        const logementId = 'c67ab8a'
        const router = createMemoryRouter(
            [
                {
                    path: '/logement/:logementId',
                    element: <Logement />,
                    loader: () => {
                        return logements
                    },
                    errorElement: <Error />,
                },
                {
                    path: '*',
                    element: <Error />,
                },
            ],
            {
                initialEntries: [`/logement/${logementId}`],
            }
        )

        render(<RouterProvider router={router} />)

        // La page d'erreur 404 s'affiche
        await waitFor(() => {
            screen.getByRole('heading')
        })
        expect(screen.getByRole('heading').textContent).toBe('404')
    })
})
