import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLoaderData } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'

function Logement() {
    let { logementId } = useParams()
    const logements = useLoaderData()
    const [logement, setLogement] = useState({})
    const [isLogement, setIsLogement] = useState()
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
            return navigate('/error') // Retour vers la page d'erreur
        }
    }, [logementId, logements, navigate])

    return (
        isLogement && (
            <div>
                <Layout>
                    <main className="logement">
                        <Gallery pictures={logement.pictures} />
                        <section className="logement__primary-information">
                            <div>
                                <h1>{logement.title}</h1>
                                <p>{logement.location}</p>
                                <div>
                                    {logement.tags.map((tag, index) => (
                                        <Tag
                                            key={`${tag}-${index}`}
                                            tag={tag}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Host host={logement.host} />
                                <Rating rating={logement.rating} />
                            </div>
                        </section>
                        <div className="logement__secondary-information">
                            <Collapse
                                id={logementId}
                                title="Description"
                                description={logement.description.split()}
                            />
                            <Collapse
                                id={logementId}
                                title="Equipements"
                                description={logement.equipments}
                            />
                        </div>
                    </main>
                </Layout>
                <Footer />
            </div>
        )
    )
}

export default Logement
