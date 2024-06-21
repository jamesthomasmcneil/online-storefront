import { useState, useContext, useEffect } from 'react';
import {Form, Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext';

function ProductForm() {
    
    let params = useParams()
    let [product, setProduct] = useState({
    id: params.productId,
    productName: "",
    description: "",
    price: "",
    whipped: "",
    imageURL: ""
    })

let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
let navigate = useNavigate()
let { id, whipped, imageURL, productName, description, price } = product

useEffect(() => {
if (id === undefined) return
async function fetch() {
    await getProduct(id)
    .then((product) => setProduct(product))
}
fetch()
}, [id])


    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
            })
    }

    function addOrUpdate() {
    if (id === undefined) {
        return addProduct(product)
    } else {
        return updateProduct(product)
    }
}

    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate()
    .then((product) =>
    navigate(`/products/${product.id}`)
)
}

function getImg() {
    try {
      return (`/products/${product.imageURL}`)
    } catch {
      return "https://via.placeholder.com/256"
    }
  }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Do you want your product whipped?</Form.Label>
            <Form.Control type="text" name="whipped" value={whipped} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name="imageURL" value={imageURL} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-warning" type="submit">Save</Button>
        </Form>

      
    )
}

export default ProductForm