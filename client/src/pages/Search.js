import React from "react";
import Container from 'react-bootstrap/Container'
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import SearchBooks from "../components/SearchBooks";
import Results from "../components/Results";

function Search() {
  return (
    <Container fluid>
        <Nav />
        <Jumbotron /> 
        <SearchBooks />
        <Results />
    </Container>
  );
}

export default Search;