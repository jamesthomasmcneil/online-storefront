import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


//Should contain a brief statement about yourself and your programming experience (or you can use placeholder text)

function About() {
  return (
    <>
     <Container>
      <Row>
        <Col>
        <h1>Shiggi Jam</h1>
      <p>Organic, non-toxic, holistic skincare products. Made using beef tallow, olive oil, and essential oils. </p>
<br></br>
      <h5>James Thomas McNeil</h5>
<h6>Developer & CEO</h6>
<p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake. 

Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.</p>
        
        </Col>
        <Col>
      
      <img
        id="pic"
        className="img-fluid"
        src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="ShiggiHeadquarters"
      />
      
      </Col>
      </Row>
  
    </Container>
    
      <Outlet />
    </>
  );
}

export default About;
