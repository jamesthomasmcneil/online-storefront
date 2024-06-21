import React, { useState, useContext } from 'react';
import { Stack, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';

function ProductFilters(props) {
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();
  const { products, deleteProduct } = useContext(ProductContext);

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
}

  function productFilters(products) {
    if (!products) return;

    let filteredProducts = products;

    if (priceRange === '0to10') {
      filteredProducts = products.filter(product => product.price >= 0 && product.price <= 10);
    } else if (priceRange === '10to20') {
      filteredProducts = products.filter(product => product.price > 10 && product.price <= 20);
    } else if (priceRange === '20ormore') {
      filteredProducts = products.filter(product => product.price > 20);
    }

    return filteredProducts.map(product => (
      <Card border="dark" key={product.id} className="flex-fill" style={{ width: '18rem', height: '30rem' }}>
       
        <Card.Img variant="top" src={product.imageURL}  width="256" height="256"/>
        <Card.Body>
            
            <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                
           <div >
            <Link to={`/products/${product.id}`} className="btn btn-secondary mx-3">View</Link>
            
            <Link to={`/products/${product.id}/edit`} className="btn btn-primary mx-3">Edit</Link>
           
            <Button variant="outline-warning" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
            </div>
            
            </Card.Body>
            
      </Card>
    ));
  }

  return (
    <>
      <h1> Products</h1>
      <Form.Group>
        <Form.Select onChange={e => setPriceRange(e.target.value)}>
          <option value="">Select Price Range</option>
          <option value="0to10">$0 to $10</option>
          <option value="10to20">$10 to $20</option>
          <option value="20ormore">$20 or More</option>
        </Form.Select>
      </Form.Group>
      <Stack direction="horizontal" class="d-flex flex-wrap">
        <ProductContext.Consumer>
        {({ products }) => productFilters(products)}
        </ProductContext.Consumer>
      </Stack>
    </>
  );
}

export default ProductFilters;