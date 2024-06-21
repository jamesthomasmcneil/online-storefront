import React from 'react'
import {Stack, Card, Row, Col, Button, Form} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react"

//View All Page
function ProductList(props) {

//Create State
    const [priceRange, setPriceRange] = useState('');
    let navigate = useNavigate()
    let { getProduct, deleteProduct } = useContext(ProductContext)
    
   
//Set up delete
    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }
    
//Map product cards
    function productList(products) {
        if (products === null) return
	 return products.map((product) =>
        <Card className="flex-fill" style={{ width: '18rem', height:'30rem'}}>
        <Card.Img variant="top" src={product.imageURL}  width="256" height="256"/>
        	<Card.Body>            
		<Card.Title>{product.productName}</Card.Title>
               		 <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>            
		<Link to={`/products/${product.id}`} className="btn btn-secondary mx-3">View</Link>
		<Link to={`/products/${product.id}/edit`} className="btn btn-primary mx-3">Edit</Link>
		<Button variant="outline-warning" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
		</Card.Body>
            </Card>
            )
    }

return (
    <>
{/* //Display to Products */}
        <h1>Products</h1>
      	<Stack direction="horizontal" class="d-flex flex-wrap" >
	<ProductContext.Consumer>  
            {({ products }) => (
                productList(products)
                )}   
        </ProductContext.Consumer>
		<Outlet />
	</Stack>
   </>
    )
}

export default ProductList


