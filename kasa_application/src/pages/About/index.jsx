import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const StyledLink = styled(Link)`
    text-decoration: none;
    &:link {
        color: inherit;
    }
    &:visited {
        color: #ff6060;
    }
`

const StyledAboutLink = styled(StyledLink)`
    text-decoration: underline;
`
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function About() {
    return (
        <AboutContainer>
            <Header>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledAboutLink to="/about">A Propos</StyledAboutLink>
            </Header>
            <Footer />
        </AboutContainer>
    )
}

export default About
