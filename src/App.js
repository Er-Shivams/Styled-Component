import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Body from "./Body";
import image1 from "./bg-boost-desktop.svg";
import PostList from "./PostList";
import PostForm from "./PostForm";
import Card from "./Card";


const App = () => {
  return (
    <Container>
          <div style={{height: "30%"}}>
             <Navbar />
             <Body />
          </div>
          <div style={{height:"50%", borderWidth:"10px", borderColor:"#000000"}}>

                <Image1>
                    <img style={{backgroundColor:"#3b3054", borderRadius: "10px", height:"8rem", width:"75rem"}} src={image1} alt = "Image"/> 
                    <PostForm />
                </Image1>
          </div>
          <div style={{height: "50%"}}>
            <h1 style={{textAlign: "center",}}>Advanced Statistics</h1>
            <p style={{marginLeft:"47rem",textAlign: "center",width: "21%"}}>
              Track how your link are perfoming across the web with advanced statistics dashboard.
            </p>
          </div>

          {/* <div>
            <Card/>
          </div> */}
          {/* <PostList/> */}
          {/* <PostForm/> */}
     
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: white;
  height: 100%;
`;

const Image1 = styled.section`
    
   padding: 50px 0 50px 0 ;
   margin-left: 15rem;
   
   
  
  
  
`;