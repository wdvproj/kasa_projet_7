import { useState, useEffect } from 'react'
import './style.css'
import chevronLeft from '../../assets/images/chevron_left.svg'
import chevronRight from '../../assets/images/chevron_right.svg'

function Gallery({ pictures }) {
    const [picture, displayNextPicture] = useState(0)

    useEffect(() => {
        const numberOfPicture = document.querySelector('.gallery__pages')
        numberOfPicture.textContent = `${picture + 1}/${pictures.length}`
    }, [picture, pictures.length])

    return pictures.length === 1 ? (
        <div className="gallery">
            <img
                className="gallery__picture"
                src={pictures[picture]}
                alt="logement"
            />
        </div>
    ) : (
        <div className="gallery">
            <span
                className="gallery__button gallery__button--left"
                onClick={() =>
                    picture === 0
                        ? displayNextPicture(pictures.length - 1)
                        : displayNextPicture(picture - 1)
                }
            >
                <img src={chevronLeft} alt="Page précédente" />
            </span>
            <img
                className="gallery__picture"
                src={pictures[picture]}
                alt="logement"
            />
            <span className="gallery__pages"></span>
            <span
                className="gallery__button gallery__button--right"
                onClick={() =>
                    picture === pictures.length - 1
                        ? displayNextPicture(0)
                        : displayNextPicture(picture + 1)
                }
            >
                <img src={chevronRight} alt="Page suivante" />
            </span>
        </div>
    )
}

export default Gallery
