import { NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/logo_red.svg'

function Header() {
    let activeStyle = { textDecoration: 'underline' }
    return (
        <nav className="top">
            <img className="top__picture" src={logo} alt="logo de Kasa" />
            <div className="top__link">
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    A Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
