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
const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const ErrorTitle = styled.h1`
    margin: 50px 0px;
    font-size: 288px;
    font-weight: 700;
    line-height: 411px;
`
const ErrorContent = styled.p`
    margin: 0px;
    margin-bottom: 50px;
    font-size: 36px;
    line-height: 51px;
`

const StyledBackLink = styled(StyledLink)`
    margin: 80px 0px;
    text-decoration: underline;
`

function Error() {
    return (
        <div>
            <Header>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </Header>
            <ErrorContainer>
                <ErrorTitle>404</ErrorTitle>
                <ErrorContent>
                    Oups! La page que vous demandez n'existe pas.
                </ErrorContent>
                <StyledBackLink to="/">
                    Retourner sur la page d'accueil
                </StyledBackLink>
            </ErrorContainer>
            <Footer />
        </div>
    )
}

export default Error
