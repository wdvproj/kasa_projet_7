import './style.css'
import logo from '../../assets/images/logo_white.svg'

function Footer() {
    return (
        <footer className="bottom">
            <img src={logo} alt="logo of Kasa" />
            <p className="bottom__content">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
