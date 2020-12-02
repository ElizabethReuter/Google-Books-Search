import React from "react";
import Container from 'react-bootstrap/Container'
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Saved from "../components/Saved";

function Save() {
  return (
    <Container fluid>
        <Nav />
        <Jumbotron /> 
        <Saved />
    </Container>
  );
}

export default Save;