
import React, { useState, useEffect, lazy } from 'react';
import Minitures from './Minitures';
import { Container, Button, Row, Col, DropdownButton, Dropdown, ButtonGroup, ToggleButton, Card, ButtonToolbar } from 'react-bootstrap';
import '../css/x3d.css';
const playSound = (sound_name) => {
  const lol = new Audio(`assets/sounds/${sound_name}`);
  lol.play();
}


function ModelViewer({ meta, id, idChanger }) {
  // const [modelId, setModelId] = useState(id);
  // const [modelData, setModelData] = useState('');
  require('x3dom');

  return (
    <Container fluid='md'>
      <Row>
        <Col md={9} >
          <Card style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
            <Card.Header>
              <ButtonToolbar>

                <DropdownButton title="Camera View">
                  <Dropdown.Item onClick={() => { document.getElementById('persp').setAttribute('set_bind', 'true') }}>Perspective</Dropdown.Item>
                  <Dropdown.Item onClick={() => { document.getElementById('side').setAttribute('set_bind', 'true') }}>Side</Dropdown.Item>
                  <Dropdown.Item onClick={() => { document.getElementById('top').setAttribute('set_bind', 'true') }}>Top</Dropdown.Item>
                  <Dropdown.Item onClick={() => { document.getElementById('bottom').setAttribute('set_bind', 'true') }}>Bottom</Dropdown.Item>
                </DropdownButton>
                <span style={{ width: '10px' }}></span>
                <Button onClick={() => { playSound(meta.at(id).sound_name) }}>Play Sound</Button>
              </ButtonToolbar>
            </Card.Header>
            <Card.Body>
              <Card.Title>{`${meta.at(id).title}`}</Card.Title>
              <Container className='model3D'>
                <x3d is="x3d">
                  <scene is="x3d">
                    <inline url={`assets/x3d/${meta.at(id).x3d_name}`} is="x3d"></inline>
                    <viewpoint id="persp" description="persp"
                      centerOfRotation="0 0 0"
                      position="1 2.5 6"
                      orientation="-0.939729 0.341021 -0.024796 0.421225"
                      fieldOfView="0.5"
                      set_bind="true">
                    </viewpoint>
                    <viewpoint id="side" description="side"
                      centerOfRotation="0 0 0"
                      position="0.0 0.0 6.0"
                      orientation="0.0 0.0 0.00 0.00"
                      fieldOfView="0.5"
                      set_bind="true">
                    </viewpoint>
                    <viewpoint id="top" description="top"
                      centerOfRotation="0 0 0"
                      position="0 6 0"
                      orientation="1 0.0 0.0 4.7"
                      fieldOfView="0.5"
                      set_bind="true">
                    </viewpoint>
                    <viewpoint id="bottom" description="bottom"
                      centerOfRotation="0 0 0"
                      position="0 -5 0"
                      orientation="1 0.0 0.0 -4.7"
                      fieldOfView="0.5"
                      set_bind="true">
                    </viewpoint>
                    <background transparency="1" is="x3d" />
                  </scene>
                </x3d>
              </Container>
              <Card.Text>
                {`${meta.at(id).description}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} >
          <Card style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
            <Card.Header>

              <Card.Title>Change Model</Card.Title>
            </Card.Header>
            <Card.Body>
              <Minitures meta={meta} idChanger={idChanger}></Minitures>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ModelViewer;
