import { useState } from 'react'
import './style.css'
import chevronLeft from '../../assets/images/chevron_left.svg'
import chevronRight from '../../assets/images/chevron_right.svg'

function Gallery({ pictures }) {
    const [picture, displayNextPicture] = useState(0)

    function displayPreviousPicture() {
        picture === 0
            ? displayNextPicture(pictures.length - 1)
            : displayNextPicture(picture - 1)
    }

    function displayNextOnePicture() {
        picture === pictures.length - 1
            ? displayNextPicture(0)
            : displayNextPicture(picture + 1)
    }

    return (
        <div className="gallery">
            {pictures.length > 1 && (
                <span
                    className="gallery__button gallery__button--left"
                    onClick={() => displayPreviousPicture()}
                >
                    <img src={chevronLeft} alt="Précédente" />
                </span>
            )}
            <img
                data-testid="picture"
                className="gallery__picture"
                src={pictures[picture]}
                alt="Intérieur du logement"
            />
            <span data-testid="numberOfPicture" className="gallery__pictures">
                {`${picture + 1}/${pictures.length}`}
            </span>
            {pictures.length > 1 && (
                <span
                    className="gallery__button gallery__button--right"
                    onClick={() => displayNextOnePicture()}
                >
                    <img src={chevronRight} alt="Suivante" />
                </span>
            )}
        </div>
    )
}

export default Gallery
