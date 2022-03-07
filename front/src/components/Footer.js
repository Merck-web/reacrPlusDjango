import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { format } from "date-fns";

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>Copyright {format(new Date(), "yyyy")} &copy; Merc</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
