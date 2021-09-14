import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../../actions';
import '../style.css';
import { Link } from 'react-router-dom';
import {generatePublicUrl} from '../../../urlConfig';
import Card from '../../../components/UI/Card';
import { MaterialButton } from '../../../components/MaterialUI';
/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {
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
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card
                        headerLeft={`Điện thoại ${props.match.params.slug} dưới ${priceRange[key]}`}
                        headerRight={
                          <MaterialButton
                            title={"VIEW ALL"}
                            style={{
                              width: "96px",
                            }}
                            bgColor="#2874f0"
                            fontSize="12px"
                          />
                        }
                        style={{
                          width: "calc(100% - 40px)",
                          margin: "20px",
                        }}
                        >
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product => 
                                    <Link style={{display: 'block'}} to={`/${product.slug}/${product._id}/p`} className="productContainer">
                                        <div className="productImgContainer">
                                            <img src={generatePublicUrl(product.productPictures[0].img)} alt=""></img>
                                        </div>
                                        <div className="productInfo">
                                            <div style={{ margin: '5px 0' }}>{product.name}</div>
                                            <div>
                                                <span>4.5</span>&nbsp;
                                                <span>1200</span>
                                            </div>
                                            <div className="productPrice">{product.price}</div>
                                        </div>
                                    </Link>)
                                }

                            </div>
                        </Card>
                    );
                })
            }
        </>
    )

}
export default ProductStore