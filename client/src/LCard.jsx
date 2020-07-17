import React from "react";
import { Card } from "react-bootstrap";
export default function LCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">
        <small className="text-muted">
          {props.sd} to {props.ed}
        </small>
      </Card.Footer>
    </Card>
  );
}
