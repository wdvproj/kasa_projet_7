import './style.css'

function Banner({ picture }) {
    return (
        <div className="banner">
            <img className="banner__picture" src={picture} alt="paysage" />
        </div>
    )
}

export default Banner
