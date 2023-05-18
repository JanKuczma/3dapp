import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Image, Card, Button } from 'react-bootstrap';
import coke_img from '../assets/image/coca_cola.jpg';
import sprite_img from '../assets/image/sprite.jpg';
import pepper_img from '../assets/image/dr_pepper.jpg';

function HomeContent({ meta }) {


    return (
        <>
            <Row>
                <Col>
                    <div id="top-image">
                        <div id='top-text'>
                            <h2>Coca Cola Great Britain</h2>
                            <h3>Founded by Dr John S Pemberton</h3>
                            <p>The Coca Cola Company is the world's leading manufacturer, marketer and distributor of
                                non-alcoholic
                                beverage concentrates and syrups, and produces nearly 400 brands.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} style={{ marginBottom: '30px' }}>
                    <Card>
                        <Card.Img variant="top" src={coke_img} />
                        <Card.Body>
                            <Card.Title>Coca Cola</Card.Title>
                            <Card.Text>It was 1886, and in New York Harbour, workers were constructing the Statue
                                of Liberty. Eight hundred miles away, another great American symbol was about to be
                                unveiled.
                                Like many people who change history, John Pemberton, an Atlanta pharmacist, was inspired by
                                simple curiosity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} style={{ marginBottom: '30px' }}>
                    <Card>
                        <Card.Img variant="top" src={sprite_img} />
                        <Card.Body>
                            <Card.Title>Sprite</Card.Title>
                            <Card.Text>First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now
                                the world's leading lemon and lime flavoured soft drink and is sold in more than 190
                                different countries.
                                Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of
                                Sprite without the sugar or calories.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md={4} style={{ marginBottom: '30px' }}>
                    <Card>
                        <Card.Img variant="top" src={pepper_img} />
                        <Card.Body>
                            <Card.Title>Dr Pepper</Card.Title>
                            <Card.Text>Dr Pepper's unique, sparkling blend of 23 fruit flavours has been around
                                for well over a century and it's still the same, with that distinctive flavour you just
                                can't quite put your tongue on.
                                Created by Texas pharmacist Charles Alderton in 1885, the distinctive, bold taste of
                                Dr Pepper has been popular ever since.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <span/>
            </Row>
        </>
    );
}

export default HomeContent;
