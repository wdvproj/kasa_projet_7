import styled from 'styled-components'
import logo from '../../assets/images/logo_red.svg'

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    padding-bottom: 0px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
`

function Header({ children }) {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo of Kasa" />
            <LinkContainer>{children}</LinkContainer>
        </HeaderContainer>
    )
}

export default Header
