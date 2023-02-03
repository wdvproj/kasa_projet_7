import './style.css'

function Host({ host }) {
    return (
        <div className="host">
            <div className="host__name">
                <div>{host.name.split(' ')[0]}</div>
                <div>{host.name.split(' ')[1]}</div>
            </div>
            <img className="host__picture" src={host.picture} alt="host" />
        </div>
    )
}

export default Host