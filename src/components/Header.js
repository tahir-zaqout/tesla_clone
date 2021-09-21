import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const cars = useSelector(selectCars)

    return (
        <Container>
            <a><img src='/images/logo.svg' alt='TESLA Logo'/></a>
            <Menu>
              {cars && cars.map((car, idx)=> <li key={idx}><a href=''>{car}</a></li>)}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerOpen(true)} />
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseBtn onClick={()=> setBurgerOpen(false)} />
                  {cars && cars.map((car, idx)=> <li key={idx}><a href=''>{car}</a></li>)}
                  <li><a href=''>Exsisting Inventory</a></li>
                  <li><a href=''>Trade In</a></li>
                  <li><a href=''>Roadster</a></li>
                  <li><a href=''>Cybertruck</a></li>
                  <li><a href=''>Simi</a></li>
                  <li><a href=''>Power Wall</a></li>
                  <li><a href=''>Trade In</a></li>
                  <li><a href=''>Roadster</a></li>
                  <li><a href=''>Cybertruck</a></li>
                  <li><a href=''>Simi</a></li>
                  <li><a href=''>Power Wall</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`
const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;

    li{
        text-transform: uppercase;
        margin: 0 10px;
        font-weight: 500;
    }

    @media only screen and  (max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center;

    a{margin-right: 10px; text-transform: uppercase;}
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    // display: none !important;
    //
    // @media only screen and  (max-width: 768px){
    //   display: block !important;
    // }
`
const BurgerNav = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    width: 250px;
    overflow-y: scroll;
    background: #fff;
    z-index: 3;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: transform .3s ease-in-out;
    transform: ${props => props.show ? 'translateX(0)' :'translateX(100%)'};

    li{
        padding: 15px 0;
        border-bottom: 1px solid #ddd;

        a{
          font-weight:500;
        }
    }
`
const CloseBtn = styled(CloseIcon)`
  margin-left: auto;
  cursor: pointer;
`
