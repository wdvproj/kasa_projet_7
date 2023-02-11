import './style.css'
import Header from '../Header'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    )
}

export default Layout
