import { Link } from 'react-router-dom'
import './style.css'
import Layout from '../../components/Layout'

function Error() {
    return (
        <Layout>
            <main className="error">
                <h1 className="error__title">404</h1>
                <p className="error__content">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </main>
        </Layout>
    )
}

export default Error
