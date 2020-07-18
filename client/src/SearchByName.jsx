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

export default function SearchByName() {
  const search = () => {
    fetch(`http://localhost:3001/absences/uid/${name}`)
      .then((res) => res.json())
      .then((data) => setabsences(data));
  };
  const handleNamechange = (e) => {
    setname(ReactDOM.findDOMNode(nameref.current).value);
  };

  const nameref = useRef();
  const [absences, setabsences] = useState([]);
  const [name, setname] = useState();

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>⯆ Search Absences By Name</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Employee Name</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter Name of Employee"
                    onChange={handleNamechange}
                    ref={nameref}
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
                <LCard
                  name={item.name}
                  sd={item.startDate}
                  ed={item.endDate}
                  key={item.name + item.startDate}
                />
              ))}
            </CardColumns>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
