import { Row, Col, Card } from 'react-bootstrap';

function Statement({ meta }) {


    return (
        <>
            <Row>
                <Col md={12} style={{ marginBottom: '30px' }}>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,.1)', padding: '5px' }}>
                        <Card.Header>
                            <Card.Title>Statement of Originality</Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <Card.Text>
                                These web pages are submitted as part of requirement for the degree of BSc Computer Science & Artificial Intelligence at University of Sussex.
                                They are the product of my own labour except where indicated in the web page content.
                                These web pages or contents may be freely copied and distribiuted provided the source is acknowledged.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Statement;
