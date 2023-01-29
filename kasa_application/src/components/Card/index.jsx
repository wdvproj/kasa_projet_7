import styled from 'styled-components'

const Logement = styled.article`
    display: flex;
    align-items: end;
    width: 340px;
    height: 340px;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
    background-color: #ff6060;
    font-size: 18px;
    line-height: 26px;
`

const Title = styled.span`
    width: 33%;
`
function Card({ id, title }) {
    return (
        <Logement key={id}>
            <Title>{title}</Title>
        </Logement>
    )
}

export default Card
