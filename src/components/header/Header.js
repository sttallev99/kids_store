import React, { useContext } from 'react'
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

import './header.css'
import { AppContext } from '../../context/appContext';


const Header = () => {
  const { productsToBuy } = useContext(AppContext);
  return (
    <div className='headerStaticWrapper'>
      <div className='headerWrapper'>
        <div className='topHeaderWrapper'><p>Предлагаме <b>Безплатна Доставка</b> на <b>избрани категории</b> над <b>99лв</b></p></div>
        <div className='middleHeaderWrapper'>
          <div className='logoImgMiddleHeaderWrapper'>
            <img  className='logoImgMiddleHeader' src='https://www.kokokids.bg/image/cache/catalog/test/logo-new-300x53.png' alt='' />
          </div>
          <div className='contactInfoMiddleHeaderWrapper'>
            <CallIcon className='contactInfoIcon' sx={{width: '50px', height: '50px', color: '#326AB5'}}/>
            <div className='contactInfoContent'>
              <p>Телефон за връзка: </p>
              <p> 088 888 7777</p>
            </div>
          </div>
          <div className='searchItemsMiddeheaderWrapper'>
            <input type='text' placeholder='Търси продукти...' />
            <SearchIcon className='searchIconMiddleHeader' 
              sx={{
                height: '37%', 
                width: '40px',
                borderRadius: '0 10px 10px 0',
                backgroundColor: 'rgb(50, 106, 181)',
                color: 'rgb(237,247,251)',
                cursor: 'pointer'
              }}/>
          </div>
            <div className='savedItemsIconMiddleHeaderWrapper'>
              <Link to='/order-now'>
                <ShoppingBagIcon 
                    sx={{
                      width: '50px',
                      height: '50px',
                      color: 'rgb(50, 106, 181)'
                    }}/>
              </Link>
              <span>{productsToBuy.length}</span>
            </div>
        </div>
        <div className='bottomHeaderWrapper'>
          <div className='bottomHeaderLeftWrapper'>
            <Link to='/' style={{textDecoration: 'none'}}><span className='buttonHeaderOption'>НАЧАЛО</span></Link>
            <span className='buttonHeaderOption'>АКЦИЯ</span>
            <span className='buttonHeaderOption'>КОНТАКТИ</span>
          </div>
          <div className='buttonHeaderRightWrapper'>
            <span className='buttonHeaderOption'>ГРАДИНА И СПОРТ</span>
            <span className='buttonHeaderOption'>ДЕТСКА СТАЯ</span>
            <span className='buttonHeaderOption'>БЕБЕ</span>
            <span className='buttonHeaderOption'>ДЕТСКИ ДРЕХИ</span>
            <span className='buttonHeaderOption'>ПРЕВОЗНИ СРЕДСТВА</span>
            <span className='buttonHeaderOption'>ИГРАЧКИ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
