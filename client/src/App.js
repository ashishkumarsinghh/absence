import React from "react";

import { Container } from "react-bootstrap";
import Leaves from "./Leaves";
import SearchByTime from "./SearchByTime";
import SearchByName from "./SearchByName";
import ExportCal from "./ExportCal";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <Container fluid className="App">
      <Header />
      <br />
      <Leaves />
      <br />
      <SearchByTime />
      <br />
      <SearchByName />
      <br />
      <ExportCal />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
