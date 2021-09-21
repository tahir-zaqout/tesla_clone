import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({bg}) => {
    return (
        <Wrap backgroundImage={bg}>
            <SectionText>
                <Fade bottom>
                    <h2>Model S</h2>
                    <p>This Is A Component Hero Text </p>
                </Fade>
            </SectionText>
            <Buttons>
                <ButtonGroup>
                <Fade bottom>
                    {LeftButton && 
                        <LeftButton>Customer Order</LeftButton>
                    }
                    <RightButton>Existing Inventory</RightButton>
                </Fade>
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg'/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${props => `url('/images/${props.backgroundImage}')`} no-repeat center/cover
    
    `

const SectionText = styled.div`
        padding-top: 20vh;
        text-align: center;
`
const Buttons = styled.div``
const ButtonGroup = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.button`
    width: 250px;
    height: 40px;
    background: rgba(23, 26, 32, 0.8);
    border-radius: 100px;
    border-color: transparent;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 10px
`
const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: .5;
    color: #222;
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1s;
`