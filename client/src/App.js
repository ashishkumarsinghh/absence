import React, { useEffect } from "react";
import config from "./config";
import { Container } from "react-bootstrap";
import Leaves from "./Leaves";
import SearchByTime from "./SearchByTime";
import SearchByName from "./SearchByName";
import ExportCal from "./ExportCal";
function App() {
  return (
    <Container fluid className="App">
      <Leaves />
      <br />
      <SearchByTime />
      <br />
      <SearchByName />
      <br />
      <ExportCal />
    </Container>
  );
}

export default App;
