import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import photo from '../../assets/images/background_landscape_1.jpg'

function Home() {
    const logements = useLoaderData()
    const [isLogements, setIsLogements] = useState(false)

    useEffect(() => {
        if (logements) {
            setIsLogements(true)
        }
    }, [logements])

    return (
        isLogements && (
            <div>
                <Layout>
                    <main className="home">
                        <div className="home__banner">
                            <Banner picture={photo} />
                            <h1>Chez vous, partout et ailleurs</h1>
                        </div>
                        <section className="home__cards">
                            {logements.map(({ id, title, cover }) => (
                                <Link key={`link-${id}`} to={`/logement/${id}`}>
                                    <Card title={title} cover={cover} />
                                </Link>
                            ))}
                        </section>
                    </main>
                </Layout>
                <Footer />
            </div>
        )
    )
}

export default Home
