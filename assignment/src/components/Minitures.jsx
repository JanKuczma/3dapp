import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function Minitures({ meta, idChanger }) {
  return (
    <Container fluid='md'>
      <Row>
        {meta.map((val) => (
          <Col xs={4} md={12} key={val.id} style={{padding: '5px'}}>
            <Card className='miniture'>
              <Image
                rounded
                className="d-block w-100"
                src={`assets/image/${val.image_name}`}
                alt={val.id}
                onClick={() => idChanger(val.id - 1)}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Minitures;
