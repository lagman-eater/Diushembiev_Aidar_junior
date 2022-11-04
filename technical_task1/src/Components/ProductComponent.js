import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const {id, title} = products[0] 
    return (
        <div>
            <h1>ProductComponent</h1>
        </div>
    )
}
export default ProductComponent