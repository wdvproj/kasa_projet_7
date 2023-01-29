import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    return (
        <div>
            <Header>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </Header>
            Home
            <Footer />
        </div>
    )
}

export default Home
