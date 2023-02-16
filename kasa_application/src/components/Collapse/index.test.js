import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './index.jsx'

describe('Collapse', () => {
    it('open then close', async () => {
        render(<Collapse title="Service" children={<p>Good services</p>} />)

        const title = screen.getByText('Service')
        const chevron = screen.getByRole('img')

        expect(chevron.getAttribute('src')).toBe('chevron_down.svg')
        // Au clic sur l'icône chevronDown, l'icône chevronUp apparaît ainsi que la description
        fireEvent.click(title)
        let description = screen.getByText('Good services')
        expect(chevron.getAttribute('src')).toBe('chevron_up.svg')
        expect(description).toBeTruthy()

        // Au clic sur l'icône chevronUp, l'icône chevronDown apparaît et la description n'apparaît pas
        fireEvent.click(title)
        const noDescription = screen.queryByText('Good services')
        expect(chevron.getAttribute('src')).toBe('chevron_down.svg')
        expect(noDescription).toBeNull()
    })
})
