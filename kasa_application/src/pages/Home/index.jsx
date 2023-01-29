import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import logements from '../../datas/logements.json'
import photo from '../../assets/images/background_landscape_1.jpg'

const StyledLink = styled(Link)`
    text-decoration: none;
    &:link {
        color: inherit;
    }
    &:visited {
        color: #ff6060;
    }
`
const StyledHomeLink = styled(StyledLink)`
    text-decoration: underline;
`

const HomeContainer = styled.div`
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

const Title = styled.h1`
    position: absolute;
    top: 25%;
    left: 0px;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-size: 48px;
    line-height: 68px;
`

const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: #f7f7f7;
    color: #ffffff;
`

function Home() {
    return (
        <div>
            <Header>
                <StyledHomeLink to="/">Accueil</StyledHomeLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </Header>
            <HomeContainer>
                <Banner>
                    <Image src={photo} alt="landscape background" />
                    <Title>Chez vous, partout et ailleurs</Title>
                </Banner>
                <Gallery>
                    {logements.map(({ id, title }) => (
                        <Card id={id} title={title} />
                    ))}
                </Gallery>
            </HomeContainer>
            <Footer />
        </div>
    )
}

export default Home
