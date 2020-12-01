import React from "react";
// import "./Nav.css";

function Nav() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Google Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
}

export default Nav;
