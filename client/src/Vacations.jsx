import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export default function Vacations() {
  useEffect(() => {
    fetch("/absences/ltype/vacations")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Row>
      <h2>Vacations</h2>
    </Row>
  );
}
