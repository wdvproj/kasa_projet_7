import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import photo from '../../assets/images/background_landscape_2.jpg'

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

const Banner = styled.div`
    position: relative;
    margin: 25px 0px;
`

const Image = styled.img`
    position: relative;
    width: 100%;
    border-radius: 25px;
`
const Collapses = styled.div`
    margin: 10px 100px;
`

function About() {
    const sections = [
        { title: 'Fiabilité', description: '' },
        {
            title: 'Respect',
            description:
                'La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        { title: 'Service', description: '' },
        { title: 'Responsabilité', description: '' },
    ]

    return (
        <Wrapper>
            <Header>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledAboutLink to="/about">A Propos</StyledAboutLink>
            </Header>
            <AboutContainer>
                <Banner>
                    <Image src={photo} alt="Photo d'un paysage" />
                </Banner>
                <Collapses>
                    {sections.map(({ title, description }, index) => (
                        <Collapse
                            id={`${title}-${index}`}
                            title={title}
                            description={description}
                        />
                    ))}
                </Collapses>
            </AboutContainer>
            <Footer />
        </Wrapper>
    )
}

export default About
