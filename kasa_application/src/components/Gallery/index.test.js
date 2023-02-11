import { fireEvent, render, screen } from '@testing-library/react'
import Gallery from './index.jsx'

describe('Gallery', () => {
    it('first picture to last picture', () => {
        render(
            <Gallery
                pictures={[
                    'image_1.jpg',
                    'image_2.jpg',
                    'image_3.jpg',
                    'image_4.jpg',
                    'image_5.jpg',
                ]}
            />
        )

        const chevronLeft = screen.getByAltText('Précédente')
        const picture = screen.getByTestId('picture')
        const numberOfPicture = screen.getByTestId('numberOfPicture')
        expect(picture.getAttribute('src')).toBe('image_1.jpg')
        expect(numberOfPicture.textContent).toBe('1/5')

        // Au clic sur l'icône chevronLeft, l'image affichée est la dernière image
        fireEvent.click(chevronLeft)
        expect(picture.getAttribute('src')).toBe('image_5.jpg')
        expect(numberOfPicture.textContent).toBe('5/5')
    })
    it('first picture to next picture', () => {
        render(
            <Gallery
                pictures={[
                    'image_1.jpg',
                    'image_2.jpg',
                    'image_3.jpg',
                    'image_4.jpg',
                    'image_5.jpg',
                ]}
            />
        )

        const chevronRight = screen.getByAltText('Suivante')
        const picture = screen.getByTestId('picture')
        const numberOfPicture = screen.getByTestId('numberOfPicture')
        expect(picture.getAttribute('src')).toBe('image_1.jpg')
        expect(numberOfPicture.textContent).toBe('1/5')

        // Au clic sur l'icône chevronRight, l'image affichée est la deuxième image
        fireEvent.click(chevronRight)
        expect(picture.getAttribute('src')).toBe('image_2.jpg')
        expect(numberOfPicture.textContent).toBe('2/5')
    })
})
