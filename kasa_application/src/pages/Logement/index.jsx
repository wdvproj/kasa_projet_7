import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import logements from '../../datas/logements.json'

function Logement() {
    let { logementId } = useParams()
    const [logement, setLogement] = useState({})
    const [isLogement, setIsLogement] = useState(false)

    useEffect(() => {
        for (let logement of logements) {
            if (logement.id === logementId) {
                setLogement(logement)
                setIsLogement(true)
            }
        }
    }, [logementId])

    return (
        isLogement && (
            <Layout>
                <section className="logement">
                    <Gallery pictures={logement.pictures} />
                    <div className="logement__primary-information">
                        <div>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                            <div>
                                {logement.tags.map((tag, index) => (
                                    <Tag key={`${tag}-${index}`} tag={tag} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Host host={logement.host} />
                            <Rating rating={logement.rating} />
                        </div>
                    </div>
                    <div className="logement__secondary-information">
                        <Collapse
                            id={logementId}
                            title="Description"
                            description={logement.description}
                        />
                        <Collapse
                            id={logementId}
                            title="Equipements"
                            description={
                                <ul>
                                    {logement.equipments.map(
                                        (equipment, index) => (
                                            <li key={`${equipment}-${index}`}>
                                                {equipment}
                                            </li>
                                        )
                                    )}
                                </ul>
                            }
                        />
                    </div>
                </section>
            </Layout>
        )
    )
}

export default Logement
