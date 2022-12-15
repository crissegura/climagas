import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function Header(props) {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <>
    <Navbar expand="lg" >
      <Container fluid>
        <Link to='/'>
            <Navbar.Brand href="/">
                <img src="http://www.climagas.com.ar/wp-content/uploads/2022/06/logo-horizontal-1-1536x362.png" width="200px" alt="" />
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}>
            <Link to='/' style={{textDecoration:'none'}}>
                <Nav.Link href='/' style={{color:'#F79137'}}>INICIO</Nav.Link>
            </Link>
            <Link to='/tienda' style={{textDecoration:'none'}}>
                <Nav.Link href='/tienda' style={{color:'#F79137'}}>TIENDA</Nav.Link>
            </Link>
            <Link to='/servicios' style={{textDecoration:'none'}}>
                <Nav.Link href='/servicios' style={{color:'#F79137'}}>SERVICIOS</Nav.Link>
            </Link>
            <Link to='/nosotros' style={{textDecoration:'none'}}>
                <Nav.Link href='/nosotros' style={{color:'#F79137'}}>NOSOTROS</Nav.Link>
            </Link>
            <NavDropdown title="CONTACTO" id="basic-nav-dropdown">
              <button  style={{backgroundColor:'transparent',border:'none'}} onClick={() => setModalShow(true)}>Escribinos</button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <br />
              <button  style={{backgroundColor:'transparent',border:'none'}} onClick={() => setModalShow2(true)}>Llamanos</button>
              <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
              />
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <div className='d-flex justify-content-center'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" className='mx-2' width={'30rem'} alt="" />
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384007.png" width={'30rem'} alt="" />
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Qué estás buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Escribinos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Dejanos tus datos y tu consulta. A la brevedad nos vamos a estar comunicando.</h5>
        <div className="divModal">
          <div>
            <label className='mx-2'>Nombre completo</label> <br />
            <input type="text" placeholder='Cristian Segura'/>
          </div>
          <div className='my-2'>
            <label className='mx-2'>Correo electrónico</label> <br />
            <input type="email" placeholder='cristian@segura.com'/>
          </div>
          <div>
            <label className='mx-2'>Whatsapp (opcional)</label> <br />
            <input type="number" placeholder='11123456'/>
          </div>
          <label className='my-2'>Escribí tu consulta lo más detallado posible:</label> <br />
          <textarea cols="80" style={{minHeight:'5rem'}}></textarea>
        </div>
        <input type="submit" style={{backgroundColor:'transparent',padding:'5px',margin:'5px',width:'5rem', borderRadius:'10px'}} />
      </Modal.Body>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Llamanos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Comunicate con nosotros vía telefonica al 1122334455.</h5>
        <h6>Horario de atencion 8hs a 20hs.</h6>
        
      </Modal.Body>
    </Modal>
  );
}


export default Header;