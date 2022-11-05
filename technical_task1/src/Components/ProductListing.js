import React, { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/actions/productsActions";
import styles from './Components.module.css'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const options = {
            method: 'GET',
            url: 'https://api.opensea.io/api/v1/assets',
            params: { order_direction: 'desc', limit: '20', include_orders: 'false' },
            headers: { accept: 'application/json' }
        };
        axios
            .request(options)
            .then(function (response) {
                dispatch(setProducts(response.data))
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchProducts();
    })
    return (
        <div className={styles.productLisCont}>
            <div className={styles.productLisInnerCont}>
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing