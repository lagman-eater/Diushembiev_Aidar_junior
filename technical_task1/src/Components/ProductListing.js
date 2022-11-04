import React from "react";
import { useSelector } from "react-redux";
import styles from './Components.module.css'
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div className={styles.productLisCont}>
            <ProductComponent />
        </div>
    )
}
export default ProductListing