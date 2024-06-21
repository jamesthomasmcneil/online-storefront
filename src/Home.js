import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import Stack from 'react-bootstrap/Stack'
import {Stack, Row, Col, Form, Button} from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"
import LoadingIndicator from './LoadingIndicator'
import Footer from './Footer'


function Home() {
    return (
        <>
        {/* Header with Logo and Brand Name */}
            <Navbar bg="light" variant="light">
                <Container>
                {/* <Container> */}
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.etsystatic.com/isla/48d349/57853928/isla_280x280.57853928_nvzs42sp.jpg?version=0"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{'Shiggi Jam'}
          {/* Text can be placed here */} 
          </Navbar.Brand>
        {/* </Container> */}
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/products" className="nav-link">View All</Link>
                        <Link to="/products/add" className="nav-link">Create</Link>
                    
                    </Nav>
                    <Form inline>
            <Row>
              {/* <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col> */}
              <Col xs="auto">
              <Button href={`/filter`} type="submit" variant="outline-warning" >Filter</Button>
              {/* onClick={handleDeleteProduct.bind(this, product.id)} */}
              </Col>
            </Row>
          </Form>
          <Navbar.Text>
            <LoadingIndicator />
          </Navbar.Text>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
        <Footer />
      </Stack>
    
    </>
  );
}

export default Home;
