import React, { useState } from "react";
import styled from "styled-components";
import image1 from "./illustration-working.svg";


const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
         <Wrapper>  
                    {/* <div style={{padding:'0px 20px', position: 'fixed'}}> */}
                    <Title>
                          More than just <br/>shorter links
                          <Paragraph>
                              Build your own brand's recognition and get detailed
                              insight on how your links are performing.
                          </Paragraph>
                          <MenuLink href=""><Button href="_blank"> Get Started </Button></MenuLink>   
                    </Title>
                    <Image1>
                    <img src={image1} alt = "Image"/> 
                   </Image1> 
                       
                  
                    {/* </div> */}

                
               
               
         </Wrapper>
   
         
            
     
  
  );
};

export default Body;

const Title = styled.h1`
  ${'' /* top: 70rem; */}
  font-size: 5em;
  ${'' /* text-align: center; */}
  ${'' /* width: 70%; */}
  color: #35323e;
  position: absolute;
  ${'' /* text-align: left; */}
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`

  margin-top: 20rem;
  height: 30rem;
  margin-left: 15rem;
  font-family: poppins;
  
  
`;
const Image1 = styled.section`
    
    margin-left: 65rem;
  
  
`;
const Paragraph = styled.p`
    ${'' /* margin-top: 20rem; */}
    font-family: poppins;
    font-size:0.4em;
    width: 55%;
    margin-top: 1%;
  
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
  border-radius: 2rem;
  padding: 0.6rem 3rem 0.6rem 3rem;
  &:hover {
    color: #35323e;
  }
`;
const para = styled.p`
  color: black;
  font-weight: bold;
  font-size: 100em;

`;