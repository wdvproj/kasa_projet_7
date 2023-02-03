import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { DatasContext } from '../../utils/context'
import photo from '../../assets/images/background_landscape_1.jpg'

function Home() {
    const logements = useContext(DatasContext)

    return (
        <Layout>
            <div className="home">
                <div className="home__banner">
                    <Banner picture={photo} />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <section className="home__cards">
                    {logements.map(({ id, title, cover }) => (
                        <Link to={`/logement/${id}`}>
                            <Card key={id} title={title} cover={cover} />
                        </Link>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

export default Home
