import React, { useEffect } from "react";
import config from "./config";
import "./styles/main.css";
import { Container } from "react-bootstrap";
import Card from "./Card";
function App() {
  return (
    <Container fluid className="App">
      <Card />
    </Container>
  );
}

export default App;
