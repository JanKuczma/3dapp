import {Row, Col, Card } from 'react-bootstrap';

function References({ meta }) {


    return (
        <>
            <Row>
                <Col md={12} style={{ marginBottom: '30px' }}>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,.1)', padding: '5px' }}>
                        <Card.Header>
                            <Card.Title>References</Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <a href="https://react-bootstrap.github.io/">React-bootstrap documentation</a>
                                <br></br>
                                <a href="https://x3dom.readthedocs.io/en/1.4.0/tutorial/blender_export.html">X3DOM/Blender Docs</a>
                                <br></br>
                                <a href="https://www.soundjay.com/">Sound Effects</a>
                                <br></br>
                                <a href="https://cocacolaunited.com/about-us/">Coca-Cola Beverages Image</a>
                                <br></br>
                                <a href="https://altorouter.com/">PHP Routing Class</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default References;
