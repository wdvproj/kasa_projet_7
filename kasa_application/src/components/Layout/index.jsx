import './style.css'
import Header from '../Header'
import Footer from '../Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
