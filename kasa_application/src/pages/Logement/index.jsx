import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import { DatasContext } from '../../utils/context'

function Logement() {
    let { logementId } = useParams()
    const logements = useContext(DatasContext)
    const [logement, setLogement] = useState({})
    const [isLogement, setIsLogement] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let knownId

        for (let logement of logements) {
            if (logement.id === logementId) {
                knownId = true
                setLogement(logement)
                setIsLogement(true)
            }
        }
        if (!knownId) {
            navigate('/error')
        }
    }, [logementId, logements, navigate])

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
