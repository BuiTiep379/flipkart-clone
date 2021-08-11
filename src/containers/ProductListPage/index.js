import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import './style.css';

import {generatePublicUrl} from '../../urlConfig';


/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5M: '5 Triệu',
        under10M: '10 Triệu',
        under20M: '20 Triệu',
        under50M: '50 Triệu',
    });
    const dispatch = useDispatch();
    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, [])


    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>Điện thoại {props.match.params.slug} dưới {priceRange[key]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{display: 'flex'}}>
                                {
                                    product.productsByPrice[key].map(product => <div className="productContainer">
                                        <div className="productImgContainer">
                                            <img src={ generatePublicUrl(product.productPictures[0].img)} alt=""></img>
                                        </div>
                                        <div className="productInfo">
                                            <div style={{ margin: '5px 0' }}>{product.name}</div>
                                            <div>
                                                <span>4.5</span>&nbsp;
                                                <span>1200</span>
                                            </div>
                                            <div className="productPrice">{product.price}</div>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                    );
                })
            }

        </Layout>
    )

}

export default ProductListPage