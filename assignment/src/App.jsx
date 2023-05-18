//import { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
//import style from './App.css?inline';
import './css/App.css';
import ModelViewer from './components/ModelViewer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GalleryViewer from './components/GalleryViewer';
import Logo from './components/Logo';
import HomeContent from './components/HomeContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Statement from './components/Statement';
import References from './components/References';
const api_url = process.env.REACT_APP_API_URL;

function App() {
  const [showId, setShowId] = useState(0);
  const [modelId, setModelId] = useState(0);
  const [meta, setMeta] = useState([]);


  const getMeta = async () => {
    try {
      const meta_tmp = await fetch(`${api_url}/model3d/meta/all`)

      const meta_json = await meta_tmp.json();

      setMeta(meta_json);
      console.log('meta OK');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMeta()
  }, [])

  const showContent = () => {
    switch (showId) {
      case 1: return <GalleryViewer meta={meta}></GalleryViewer>
      case 2: return <ModelViewer meta={meta} id={modelId} idChanger={setModelId}></ModelViewer>
      case 3: return <Statement></Statement>
      case 4: return <References></References>
      default: return <HomeContent meta={meta}></HomeContent>
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Container>
            <Navbar.Brand onClick={() => setShowId(0)}>
              <Logo></Logo>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setShowId(0)}>Home</Nav.Link>
              <Nav.Link onClick={() => setShowId(1)}>Gallery</Nav.Link>
              <NavDropdown title="Models" id="collasible-nav-dropdown">
                {meta.map((val) => (
                  <NavDropdown.Item key={val.id} onClick={() => { setModelId(val.id - 1); setShowId(2) }}>{val.title}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Container className="contentContainer">
        {showContent()}
      </Container>
      <Navbar expand="lg" bg="dark" variant="dark" className='my-footer'>
        <Container>
          <Nav>
            <Navbar.Text>{'\u00a9'} 2023 Mobile Web 3D Apps</Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => setShowId(3)}><FontAwesomeIcon icon={faBookOpen} /> Statement of Originality</Nav.Link>
            <Nav.Link onClick={() => setShowId(4)}><FontAwesomeIcon icon={faBook} /> References</Nav.Link>
            <Nav.Link href='https://github.com/jsk28/3dapp'><FontAwesomeIcon icon={faGithub} /> GitHub</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default App;
