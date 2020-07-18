import React, { useEffect, useState } from "react";
import { Row, Col, CardColumns, Accordion, Card } from "react-bootstrap";
import LCard from "./LCard";
export default function Leaves() {
  const [vacations, setvacations] = useState([]);
  const [sickness, setsickness] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/absences/ltype/vacation")
      .then((res) => res.json())
      .then((data) => setvacations(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/absences/ltype/sickness")
      .then((res) => res.json())
      .then((data) => setsickness(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <Accordion>
        <Row>
          <Col>
            <Card bg="success">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4> ⯆ Vacations</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <CardColumns>
                    {vacations.map((v, idx) => (
                      <LCard
                        name={v.name}
                        sd={v.startDate}
                        ed={v.endDate}
                        key={v.name + v.startDate + v.endDate + idx}
                      />
                    ))}
                  </CardColumns>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h4> ⯆ Sickness</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <CardColumns>
                    {sickness.map((v, idx) => (
                      <LCard
                        name={v.name}
                        sd={v.startDate}
                        ed={v.endDate}
                        key={v.name + v.startDate + v.endDate + idx}
                      />
                    ))}
                  </CardColumns>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
      </Accordion>
    </React.Fragment>
  );
}
