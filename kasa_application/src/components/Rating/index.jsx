import './style.css'
import emptyStar from '../../assets/images/star_rate_empty.svg'
import fullStar from '../../assets/images/star_rate_full.svg'

function Rating({ rating }) {
    const numberOfStars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {numberOfStars.map((number, index) =>
                rating >= number ? (
                    <img
                        className="rating__picture"
                        key={`full-star-${index}`}
                        src={fullStar}
                        alt={`${index} étoile pleine`}
                    />
                ) : (
                    <img
                        className="rating__picture"
                        key={`empty-star-${index}`}
                        src={emptyStar}
                        alt="étoile vide"
                    />
                )
            )}
        </div>
    )
}

export default Rating