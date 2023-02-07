import { Link, useLoaderData } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import photo from '../../assets/images/background_landscape_1.jpg'

function Home() {
    const logements = useLoaderData()

    return (
        <Layout>
            <main className="home">
                <div className="home__banner">
                    <Banner picture={photo} />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <section className="home__cards">
                    {logements.map(({ id, title, cover }) => (
                        <Link key={`link-${id}`} to={`/logement/${id}`}>
                            <Card
                                key={`card-${id}`}
                                title={title}
                                cover={cover}
                            />
                        </Link>
                    ))}
                </section>
            </main>
        </Layout>
    )
}

export default Home
