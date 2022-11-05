import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styles from './Components.module.css'
import Loader from './Loader'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products.assets)
    const renderList = useSelector((state) => state.allProducts.products.assets).map((item) => {
        const { id, name, image_url, token_id } = item;
        return (
            <div className={styles.productCompCard}>
                {Object.keys(products).length === 0 ? (
                    <div>Main page loading...</div>
                ) : (
                    <div>
                        <h3>{name}</h3>
                        <div className={styles.productCompCardImg}><img src={image_url} alt={name} /></div>
                        <Link to={`/nft/${item.asset_contract.address}/${token_id}`} key={id}>Подробнее...</Link>
                    </div>
                )}
            </div>
        );
    })
    return <>{renderList}</>
}

export default ProductComponent