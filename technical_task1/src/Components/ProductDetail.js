import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from './Components.module.css'
import { selectedProduct } from "../Redux/actions/productsActions";
import Loader from './Loader'

const ProductDetail = () => {
    let product = useSelector((state) => state.product);
    const { image_url, name, description } = product
    // const { created_date, asset_contract_type } = product.asset_contract
    const { assetContractAdress, tokenId } = useParams();
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://api.opensea.io/api/v1/asset/${assetContractAdress}/${tokenId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        fetchProductDetail()
    }, []);
    return (
        <div className={styles.productDetCont}>
            {Object.keys(product).length === 0 ? (
                <Loader />
            ) : (
                <div className={styles.productDetMain}>
                    <div className={styles.productDetImg}><img src={image_url} alt={name}/></div>
                    <div className={styles.productDetDescription}>
                        <h3>Name: {name}</h3>
                        <div>Description: {description ?? 'no description unfortunately'}</div>
                        <div>Created date: {product.asset_contract.created_date}</div>
                        <div>Asset contract type: {product.asset_contract.asset_contract_type}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail