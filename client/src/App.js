import React, { useEffect } from "react";
import config from "./config";
import { Container } from "react-bootstrap";
import Leaves from "./Leaves";
import SearchByTime from "./SearchByTime";
function App() {
  return (
    <Container fluid className="App">
      <Leaves />
      <br />
      <SearchByTime />
    </Container>
  );
}

export default App;
