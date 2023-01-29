import styled from 'styled-components'
import logo from '../../assets/images/logo_white.svg'

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-center: center;
    align-items: center;
    padding: 30px;
    padding-top: 60px;
    background-color: #000000;
    color: #ffffff;
`
const FooterContent = styled.p`
    margin: 0px;
    line-height: 34px;
`

function Footer() {
    return (
        <FooterContainer>
            <img src={logo} alt="logo of Kasa" />
            <FooterContent>© 2020 Kasa. All rights reserved</FooterContent>
        </FooterContainer>
    )
}

export default Footer
