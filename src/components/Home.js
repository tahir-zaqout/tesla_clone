import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Header />
            <Section bg='model-x.jpg'/>
            <Section bg='model-s.jpg'/>
            <Section bg='model-y.jpg'/>
            <Section bg='model-3.jpg'/>
            <Section bg='solar-panel.jpg'/>
            <Section bg='solar-roof.jpg'/>
            <Section bg='accessories.jpg'/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh
`