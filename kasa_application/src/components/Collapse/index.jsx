import { useState } from 'react'
import './style.css'

function Collapse({ id, title, description }) {
    const [isCollapseOpen, openCollapse] = useState(false)

    return isCollapseOpen ? (
        <section className="section" key={id}>
            <h2 className="section__title">
                {title}

                <span onClick={() => openCollapse(false)}>
                    <i class="fa-solid fa-chevron-up"></i>
                </span>
            </h2>
            <p className="section__content">{description}</p>
        </section>
    ) : (
        <section className="section" key={id}>
            <h2 className="section__title">
                {title}

                <span onClick={() => openCollapse(true)}>
                    <i class="fa-solid fa-chevron-down"></i>
                </span>
            </h2>
        </section>
    )
}

export default Collapse
