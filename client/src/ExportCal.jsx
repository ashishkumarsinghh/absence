import React from "react";
import { Accordion, Card, Col } from "react-bootstrap";
export default function ExportCal() {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4> ⯆ Export To Outlook</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Col>
            <br />
            <a
              href="http://localhost:3001/absences/export"
              className="btn btn-dark"
            >
              Download iCal File
            </a>
            <br />
            <br />
          </Col>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
