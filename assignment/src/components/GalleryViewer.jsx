import { useState, useEffect } from 'react';
import Minitures from './Minitures';
import { Container, Carousel, Row, Col, Image, Card } from 'react-bootstrap';
const api_url = process.env.REACT_APP_API_URL;

function GalleryViewer({ meta }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <Container fluid="md">
      <Row>
        <Col md={9}>
          <Card style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
            <Card.Body>
              <Carousel activeIndex={index} onSelect={handleSelect} style={{ maxWidth: '1200px' }}>
                {meta.map((val) => (
                  <Carousel.Item key={val.id}>
                    <Card.Title>{val.title}</Card.Title>
                    <Image
                      rounded
                      className="d-block w-100"
                      src={`assets/image/${val.image_name}`}
                      alt={val.id}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
            <Card.Header>

              <Card.Title>Change Picture</Card.Title>
            </Card.Header>
            <Card.Body>
              <Minitures meta={meta} idChanger={handleSelect}></Minitures>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GalleryViewer;
