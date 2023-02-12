import { NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/logo_red.svg'

function Header() {
    let activeStyle = { textDecoration: 'underline' }
    return (
        <header className="top">
            <img className="top__picture" src={logo} alt="logo de Kasa" />
            <nav className="top__link">
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/apropos"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
