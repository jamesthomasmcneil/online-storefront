import { useEffect, useState } from 'react';
import axios from 'axios'

function ProductName() {
    let [ProductName, setProductName] = useState("unknown")

    useEffect(() => {
        async function getProductName() {
            const response = await axios.get("http://localhost:3001/products/1")
            setProductName(response.data.productName)
        }
        getProductName()
    }, [])

    return (
        <p>{ProductName}</p>
    )
}

export default ProductName;