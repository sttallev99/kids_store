import React, { useContext, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from '../../context/appContext';

const Product = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { productsToBuy, totalPrice, dispatch } = useContext(AppContext)

    const productHandleClick = () => {
        if(product.hasOwnProperty('percentDiscount')) {
            product = { ...product, newPrice: product.price - (product.price * (product.percentDiscount / 100))}
        }
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

  return (
    <>
        <div className='productWrapper'>
            <div className='productImgWrapper'>
                <img className='productImg' src={product.img} alt='' />
                <span className='productNumber'>Модел: {product.model}</span>
                {product.percentDiscount && <span className='productDiscount'>-{product.percentDiscount}%</span>}
                {
                    isLiked
                    ?   <span className='favProductIcon' onClick={() => setIsLiked(!isLiked)}>
                            <FavoriteIcon sx={{ color: 'white' }} />
                        </span>
                    :   <span className='favProductIcon' onClick={() => setIsLiked(!isLiked)}>
                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                        </span>
                
                }
            </div>
            <div className='productDescriptionWrapper'>
                <hr />
                <p className='productName'>{product.name}</p>
                <hr className='middleHr' />
                {
                    product.percentDiscount 
                    ?   (
                            <div className='productDiscountPrice'>
                                <span className='productCurrentPrice'><del>{product.price.toFixed(2)}</del><sub>лв.</sub></span>
                                <span className='productNewPrice'>
                                    {(product.price - (product.price * (product.percentDiscount / 100))).toFixed(2)}<sub>лв.</sub>
                                </span>
                            </div>
                        )
                    :   (
                        <div className='productPriceWrapper'>
                            <span className='productPrice'>{product.price.toFixed(2)}<sub>лв.</sub></span>
                        </div>
                        ) 
                
                }
                <span className='addProductButton' onClick={productHandleClick}>ДОБАВИ В КОЛИЧКА</span>
                <hr />
                <div className='productInfoWrapper'>
                    <span className='productInfo'><AttachMoneyIcon /> Бърза поръчка!</span>
                    <span className='productInfo'><QuestionMarkIcon /> Задай въпрос</span>
                </div>
            </div>
        </div>
        {/* <ToastContainer /> */}
    </>
  )
}

export default Product
