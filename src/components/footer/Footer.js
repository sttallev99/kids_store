import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './footer.css'

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='socialMediaFooterWrapper'>
        <span className='socialMediaIcon'><FacebookIcon sx={{width: '50px', height: '50px'}}/></span>
        <span className='socialMediaIcon'><TwitterIcon sx={{width: '50px', height: '50px'}}/></span>
        <span className='socialMediaIcon'><InstagramIcon sx={{width: '50px', height: '50px'}}/></span>
        <span className='socialMediaIcon'><YouTubeIcon sx={{width: '50px', height: '50px'}}/></span>
        <span className='socialMediaIcon'><WhatsAppIcon sx={{width: '50px', height: '50px'}}/></span>
      </div>
      <div className='footerInfoWrapper'>
        <div className='footerInforLeftWrapper'>
            <img className='footerInfoLeftImg' src='https://www.kokokids.bg/image/cache/catalog/test/logo-new-300x53.png' alt='' />
            <p className='footerInfoLeftText'>Детски Онлайн магазин</p>
        </div>
        <div className='footerInfoMiddleWrapper'>
            <ul className='footerOptionList'>
                <li className='footerOption'>За нас</li>
                <li className='footerOption'>Цена и начин на доставка</li>
                <li className='footerOption'>Политика на поверителност</li>
                <li className='footerOption'>Условия за ползване</li>
                <li className='footerOption'>Гаранции</li>
                <li className='footerOption'>Често задавани въпроси</li>
                <li className='footerOption'>Бланка за връщане на продукт</li>
            </ul>
            <ul className='footerOptionList'>
                <li className='footerOption'>Конакти</li>
                <li className='footerOption'>Рекламация</li>
                <li className='footerOption'>Отказ поръчка</li>
                <li className='footerOption'>Карта на сайта</li>
                <li className='footerOption'>Каталов продукти</li>
                <li className='footerOption'>Нашите магазини</li>
            </ul>
        </div>
        <div className='footerInfoRightWrapper'>
            <span className='footerInputDesctiptionText'>АБОНИРАЙТЕ СЕ ЗА НАШИТЕ ПРОМОЦИИ</span>
            <div className='footerSubscribeInputGroup'>
                <input className='footerInfoInput' type='text'  placeholder='Вашият E-mail адрес'/>
                <button className='footerInfoInputButton'>Запиши ме!</button>      
            </div>
            <div className='footerAgreeRulezGroup'>
                <input type='checkbox'/>
                <span>Прочел съм и съм съгласен с <u>Политиката за поверителност</u></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
