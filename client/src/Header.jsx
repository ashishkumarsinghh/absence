import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Header() {
  return (
    <Row style={{ background: "#FCA138" }}>
      <Col>
        <div style={{ padding: "20px 10px" }}>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/f140ee3478696725fd905f311242bfc48579b2f5/dcaca/images/logo_crewmeister_white.svg"
            alt="logo"
            width="200px"
          />{" "}
          <span
            style={{ color: "white", fontWeight: "bolder", fontSize: "2vh" }}
          >
            Absence
          </span>
        </div>
      </Col>
    </Row>
  );
}
