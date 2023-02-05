import { useState } from 'react'
import './style.css'
import chevronDown from '../../assets/images/chevron_down.svg'
import chevronUp from '../../assets/images/chevron_up.svg'

function Collapse({ id, title, description }) {
    const [isCollapseOpen, openCollapse] = useState(false)

    return isCollapseOpen ? (
        <section className="section">
            <h2 className="section__title" onClick={() => openCollapse(false)}>
                {title}

                <img src={chevronUp} alt="Fermer le contenu" />
            </h2>

            <p className="section__content">{description}</p>
        </section>
    ) : (
        <section className="section">
            <h2 className="section__title" onClick={() => openCollapse(true)}>
                {title}

                <img src={chevronDown} alt="Ouvrir le contenu" />
            </h2>
        </section>
    )
}

export default Collapse
