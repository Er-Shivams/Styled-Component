import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import image1 from "./illustration-working.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <Nav >
      
    <Logo href="">  <img src={logo} alt = "Logo"/> </Logo>
   
      <Menu1 isOpen={isOpen}> 
        <MenuLink href="">Features</MenuLink>
        <MenuLink href="">Pricing</MenuLink>
        <MenuLink href="">Resources</MenuLink>
     </Menu1>   
      <Tiles onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Tiles>
      
      <Menu isOpen={isOpen}>
                        
        <MenuLink href="">Login</MenuLink>
        <MenuLink href=""><Button> Sign Up </Button></MenuLink>
        
       
      </Menu>
    </Nav>
         
            
     
  
  );
};

export default Navbar;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  cursor: pointer;
  background: #2fd4cb;
  color: white;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2fd4cb;
  border-radius: 15px;
  &:hover {
    color: #35323e;
  }
`;
const para = styled.p`
  color: black;
  font-weight: bold;
  font-size: 100em;

`;

const MenuLink = styled.a`
  padding: 2rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #bfbfbf;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Poppins;
  &:hover {
    color: #35323e;
  }
   @media (max-width: 1006px) {
    color: white;
   
  }
`;
const Body = styled.div`
   width: 100%;
   height: 40%;
   background-color: white;
  
`;
const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-width: 10px;
  ${'' /* border-style: solid; */}
  
`;
const Image1 = styled.div`
  margin-left: 65rem;
  margin-bottom: 1006px;
  ${'' /* border-width: 2rem; */}
  ${'' /* border-style: solid; */}
  ${'' /* margin-bottom: 100%; */}

  
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  margin-left: 15rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
   @media (max-width: 1006px) {
    ${'' /* display: flex; */}
    margin-left:0;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 20rem;
  @media (max-width: 1006px) {
    ${'' /* overflow: hidden; */}
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : 0)};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
    padding: 4rem 9rem;
    border-width: 4;
    border-style: solid;
    
    background-color: #3b3054;
    border-radius: 10px;

  }
`;
const Menu1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  right: 18rem;
  @media (max-width: 1006px) {
    ${'' /* overflow: hidden; */}
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : 0)};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
    padding: 4rem 9rem;
    border-width: 4;
    border-style: solid;
    
    background-color: #3b3054;
    border-radius: 10px;

  }
`;

const Tiles = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1006px) {
    display: flex;
  }
`;