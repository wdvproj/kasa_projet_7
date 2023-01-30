import styled from 'styled-components'

const Container = styled.div`
    margin: 0px 50px;
`

function Wrapper({ children }) {
    return <Container>{children}</Container>
}

export default Wrapper
