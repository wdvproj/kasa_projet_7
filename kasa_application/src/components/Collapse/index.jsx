import { useState } from 'react'
import styled from 'styled-components'
import '../../style.css'

const CollapseContainer = styled.section`
    margin-bottom: 25px;
`

const Title = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 10px 10px 10px 20px;
    border-radius: 5px;
    background-color: #ff6060;
    color: #ffffff;
    font: inherit;
`
const Description = styled.p`
    height: 146px;
    margin: 0px;
    border-radius: 5px;
    background-color: #f7f7f7;
    font-weight: 400;
`

const ChevronUp = styled.span`
    color: #ffffff;
`

const ChevronDown = styled.span`
    color: #ffffff;
`

function Collapse({ id, title, description }) {
    const [isCollapseOpen, openCollapse] = useState(false)

    return isCollapseOpen ? (
        <CollapseContainer key={id}>
            <Title>
                {title}

                <ChevronUp onClick={() => openCollapse(false)}>
                    <i class="fa-solid fa-chevron-up"></i>
                </ChevronUp>
            </Title>
            <Description>{description}</Description>
        </CollapseContainer>
    ) : (
        <CollapseContainer key={id}>
            <Title>
                {title}

                <ChevronDown onClick={() => openCollapse(true)}>
                    <i class="fa-solid fa-chevron-down"></i>
                </ChevronDown>
            </Title>
        </CollapseContainer>
    )
}

export default Collapse
