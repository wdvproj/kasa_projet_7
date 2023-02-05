import './style.css'

function Card({ title, cover }) {
    return (
        <article className="card">
            <img
                className="card__picture"
                src={cover}
                alt="Intérieur du logement"
            />
            <span className="card__title">{title}</span>
        </article>
    )
}

export default Card
