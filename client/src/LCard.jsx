import React from "react";
import { Card } from "react-bootstrap";
export default function LCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle></Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
