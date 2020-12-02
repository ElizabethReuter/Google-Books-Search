import React from "react";
import Container from 'react-bootstrap/Container'
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Results from "../components/Results";

function Search() {
  return (
    <Container fluid>
        <Nav />
        <Jumbotron /> 
        <Seach />
        <Results />
    </Container>
  );
}

export default Search;