import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
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
    top: 20%;
    left: 0px;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-size: 48px;
    line-height: 68px;
`

const Cards = styled.section`
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
        <Wrapper>
            <Header>
                <StyledHomeLink to="/">Accueil</StyledHomeLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </Header>
            <HomeContainer>
                <Banner>
                    <Image
                        src={photo}
                        alt="Photo d'un paysage en arrière-plan du titre"
                    />
                    <Title>Chez vous, partout et ailleurs</Title>
                </Banner>
                <Cards>
                    {logements.map(({ id, title }) => (
                        <StyledLink to={`/logement/${id}`}>
                            <Card id={id} title={title} />
                        </StyledLink>
                    ))}
                </Cards>
            </HomeContainer>
            <Footer />
        </Wrapper>
    )
}

export default Home
