import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function About() {
    return (
        <div>
            <Header>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </Header>
            About
            <Footer />
        </div>
    )
}

export default About
