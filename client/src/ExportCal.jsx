import React from "react";
import { Accordion, Card, Button, Row, Col } from "react-bootstrap";
export default function ExportCal() {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>Export To Outlook</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Row>
            <Col>
              <br />
              <a
                href="http://localhost:3001/absences/export"
                className="btn btn-primary"
              >
                Download iCal File
              </a>
              <br />
              <br />
            </Col>
          </Row>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
