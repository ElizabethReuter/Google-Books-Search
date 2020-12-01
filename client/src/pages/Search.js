import React from "react";
import Container from 'react-bootstrap/Container'
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";


function Search() {
  return (
    <Container fluid>
        <Nav />
        <Jumbotron /> 
    </Container>
  );
}

export default Search;