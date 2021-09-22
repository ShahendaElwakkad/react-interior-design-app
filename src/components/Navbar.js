import React, {useState} from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav= styled.nav`
    height: 60px;
    display:flex;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    background-color:#000D1A;
    
`;

//custom component(ll logo)--->${NavLink} w 3mlt import ll css fo2
const NavLink=css`
    color:#fff;
    display:flex;
    align-items:center;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`;

const Logo=styled(Link)`
    ${NavLink}
    font-style:italic;
`;

//3shan y7ot el 3 shorat l taht b3d dol (bto3 el menu) lma l screen tesghar
const MenuBars= styled(FaBars)`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        background-size:contain;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50%, 25%);
        color:white;

    }

`;

const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:-48px;

    @media screen and (max-width:768px) {
        display:none;
    }

`;

const NavMenuLinks=styled(Link)`
    ${NavLink}

`;

const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width:768px) {
        display:none;
    }


`;

    


const Navbar = ({toggle}) => {
    // const [navbar, setNavbar]=useState(false);
    // const changeBackground=()=>{
    //     if(window.scrollY >= 80){
    //         setNavbar(true);
    //     }
    //     else {
    //         setNavbar(false);
    //     }

    // }
    // window.addEventListener('scroll', changeBackground);
    //lesa lee ba2y taht

    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                    <Button to="/contact" primary='true'>Contact Us</Button>
            </NavBtn>        
            </Nav>
    )
}

export default Navbar;
