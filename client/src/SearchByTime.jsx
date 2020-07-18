import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import LCard from "./LCard";
import {
  Card,
  InputGroup,
  Button,
  FormControl,
  Form,
  CardColumns,
  Accordion,
} from "react-bootstrap";

export default function SearchByTime() {
  const search = () => {
    console.log(sd, ed);
    fetch(`http://localhost:3001/absences/range?startDate=${sd}&endDate=${ed}`)
      .then((res) => res.json())
      .then((data) => setabsences(data));
  };
  const handleSdchange = (e) => {
    //console.log(ReactDOM.findDOMNode(sdref.current).value);
    setsd(ReactDOM.findDOMNode(sdref.current).value);
  };
  const handleEdchange = (e) => {
    seted(ReactDOM.findDOMNode(edref.current).value);
  };
  const sdref = useRef();
  const edref = useRef();
  const [absences, setabsences] = useState([]);
  const [sd, setsd] = useState();
  const [ed, seted] = useState();
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>Search Absences in Time Range</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Start Date</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter Start Date in format yyyy-mm-dd"
                    onChange={handleSdchange}
                    ref={sdref}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>End Date</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter End Date in format yyyy-mm-dd"
                    onChange={handleEdchange}
                    ref={edref}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Button variant="dark" onClick={search}>
                  Search
                </Button>
              </Form.Group>
            </Form>
            <CardColumns>
              {absences.map((item) => (
                <LCard name={item.name} sd={item.startDate} ed={item.endDate} />
              ))}
            </CardColumns>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
