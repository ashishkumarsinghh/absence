import React, { useEffect, useState } from "react";
import { Row, Col, CardColumns } from "react-bootstrap";
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
      <Row>
        <Col>
          <h2>Vacations</h2>
          <CardColumns>
            {vacations.map((v) => (
              <LCard name={v.name} sd={v.startDate} ed={v.endDate} />
            ))}
          </CardColumns>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Sickness</h2>
          <CardColumns>
            {vacations.map((v) => (
              <LCard name={v.name} sd={v.startDate} ed={v.endDate} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    </React.Fragment>
  );
}
