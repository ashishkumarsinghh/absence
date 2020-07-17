import React, { useEffect } from "react";
import config from "./config";
import { Container } from "react-bootstrap";
import Leaves from "./Leaves";
function App() {
  return (
    <Container fluid className="App">
      <Leaves />
    </Container>
  );
}

export default App;
