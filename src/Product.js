import {Card, Stack, Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from './ProductContext';
import LoadingIndicator from "./LoadingIndicator";

function Product(props) {
let params = useParams()
let navigate = useNavigate()
let { getProduct, deleteProduct } = useContext(ProductContext)

    const [product, setProduct] = useState()

useEffect(() => {
   
    async function fetch() {
        await getProduct(params.productId)
    .then((product) => setProduct(product))
 
    }
    
    fetch()
}, [params.productId, getProduct])

function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
}

function loading() {
    return(
        <div className="w-25 text-center">
            <LoadingIndicator animation="border" />
        </div>
    )
}

function productCard() {
let { id, imageURL, productName, description, price } = product

    return (
        
        <Card className="align-self-start w-25">
        <Card.Img variant="top" src={imageURL} />
            <Card.Body>
            <Card.Title>{productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
                <Card.Text>
                    <p>{description}</p>
                </Card.Text>
                <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
            <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
            </Card.Body>
        </Card>
       
    )}
    if (product === undefined) return loading();
    return product.id !== parseInt(params.productId) ? loading() : productCard()

}

export default Product
