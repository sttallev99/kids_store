import React, { useContext, useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './orderNow.css'
import { AppContext } from '../../context/appContext';

const OrderNow = () => {
  const { productsToBuy, dispatch } = useContext(AppContext);
  
  const totalPrice = productsToBuy.reduce((acc, curr) => acc + (curr.hasOwnProperty('newPrice') ? curr.newPrice : curr.price), 0)
  console.log(totalPrice)
  const SingleItem = ({product}) => {
    
    const [pieces, setPieces] = useState(1);
    useEffect(() => {
      if(pieces < 1) {
        dispatch({type: 'REMOVE_FROM_CART', payload: product.id})
      }
    },[pieces]);

    return (
      <tr>
        <td>
          <img src={product.img} alt='' className='shoppingCartSingleImg'/>
        </td>
        <td>
          <a href='#' className='productName'>{product.name}</a>
        </td>
        <td>
          {product.model}
        </td>
        <td>
          <div className='numberOfPiacesWrapper'>
            <div className='numberOfPiaces'>
              <span>{pieces}</span>
              <div className='numberOfPieacesUpDownButtons'>
                <span onClick={() => setPieces(pieces + 1)}><KeyboardArrowUpIcon /></span>
                <span><KeyboardArrowDownIcon onClick={() => setPieces(pieces - 1)}/></span>
              </div>
            </div>
            <div className='numberOfPiacesButtons'>
              <span onClick={() => setPieces(1)}><CachedIcon /></span>
              <span onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: product.id})}><CloseIcon /></span>
            </div>
          </div>
        </td>
        <td>
          {product.hasOwnProperty('newPrice') ? product.newPrice.toFixed(2) : product.price.toFixed(2)}<sub>лв.</sub>
        </td>
        <td>
          {product.hasOwnProperty('newPrice') ? (pieces * product.newPrice).toFixed(2) : (pieces * product.price).toFixed(2)}<sub>лв.</sub>
        </td>
      </tr>
    )
  }

  return (
    <div>
      <Header />
      <div className='orderNowWrapper'>
        <div className='orderNowHeader'>
          <span className='orderNowHeaderTitle'>БЪРЗА ПОРЪЧКА</span>
          <span className='orderNowHeaderCurrentLocation'>/ Кошница / Плащане</span>
        </div>
        <div className='orderNowSummaryInfoWrapper'>
              <span>ОБРАБОТКА НА ПОРЪЧКИТЕ</span>
              <hr />
              <div className='summaryInfoMainContentWrapper'>
                <p className='summaryInfoContent'>
                  При създаване на нова поръчка е пропоръчително да въведете E-mail адре, 
                  понеже на него, ще получавате информация отностно статуса на Вашата поръчка.<br />
                  Ако не получите Е-mail отностно приемането на Вашата поръчка, моля свържете се с
                  нас чрез онлайн чата ни долу в двясно или на посоченият телефон: 088 888 7777.
                  </p>
                  <p className='summaryInfoContent'>
                    <b>Обработването на всяка поръчка става по следния начин:</b><br />
                    -Работен ден (между 10:00-17:30): До няколко часа
                    -Неработен ден: Поръчката се изпълнява на следващият работен ден.
                  </p>
                  <p className='summaryInfoContent'>
                    ВАЖНО: Позвъняваме на посоченият от Вас телефонен номер за потвърждение на поръчката!
                  </p>
                  <p className='summaryInfoContent'>
                    Всички продутки се изпращат приоритетно в същият/следващият ден на поръчка!
                  </p>
              </div>
        </div>
        <div className='orderNowMainContent'>
          <div className='orderNowLeftContentWrapper'>
            <div className='shippingAdressWrapper'>
              <span className='shippingAdressTitle'>Адрес на доставка</span>
              <hr />
              <fieldset id='chooseShippingAdress'>
                <input type='radio' name='shippingAdress'/>Искам доставка на вече въведен адрес<br />
                <select name='defaultOffice' id='defaultOffice'>
                  <option value='office'>Хасково Цар Освободител /Хасково ул. Цар Освободител 42/</option>
                </select>
                <br />
                <input type='radio' name='shippingAdress'/>Искам доставка до друг офис на Еконт<br />
                <input type='text' name='office' className='shippingAdressOtherOfficeInput'/>
              </fieldset>
            </div>
          </div>
          <div className='orderNowRightContentWrapper'>
          <div className='orderNowShoppingCartWrapper'>
              <span className='shoppingCartTitle'>ВАШАТА КОЛИЧКА</span>
              <hr />
              <div className='shoppingCardMainContent'>
                <table className='numberOfPieces'>
                  <thead>
                    <tr>
                      <th>СНИМКА</th>
                      <th>ИМЕ НА ПРОДУКТА</th>
                      <th>МОДЕЛ</th>
                      <th>КОЛИЧЕСТВО</th>
                      <th>ЕД. ЦЕНА</th>
                      <th>ОБЩО</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsToBuy.map(p => <SingleItem key={p.id} product={p} />)}
                  </tbody>
                </table>
                <table className='finalPriceSummary'>
                  <tr>
                    <td>Междинна сума:</td>
                    <td>{totalPrice.toFixed(2)}<sub>лв.</sub></td>
                  </tr>
                  <tr>
                    <td>начин на доставка:</td>
                    <td>20,00<sub>лв.</sub></td>
                  </tr>
                  <tr>
                    <td>Такса наложен платеж:</td>
                    <td>2,00<sub>лв.</sub></td>
                  </tr>
                  <tr>
                    <td>Общо:</td>
                    <td>{(totalPrice + 22).toFixed(2)}<sub>лв.</sub></td>
                  </tr>
                </table>
              </div>
              <p>Чудесно! Вашите продукти попадат в акция за приоритетно изпращане!</p>
            </div>
            <div className='orderNowPaymentMethodWrapped'>
              <span className='paymentMethodTitle'>МЕТОД НА ПЛАЩАНЕ</span>
              <hr />
              <div className='paymentMethodContent'>
                <fieldset id='choosePaymentMethod'>
                  <input type='radio' name='paymentMethod' />Плащане с кредитна/дебитна карта<br />
                  <input type='radio' name='paymentMethod' />Наложен платеж<br />
                  <input type='radio' name='paymentMethod' />PayPal<br />
                </fieldset>
                <img className='orderNowPaymentMethodImg' src='https://www.kokokids.bg/image/catalog/test/payments.png' alt='' />
              </div>
            </div>
            <div className='orderNowDeliveryMethod'>
              <span className='deliveryMethodTitle'>МЕТОД НА ДОСТАВКА</span>
              <hr />
              <div className='deliveryMethodContent'>
                <div className='deliveryMethodTopSection'>
                  <fieldset id='chooseDeliveryMethod'>
                    <input type='radio' name='deliveryMethod' />Доставка до Личен адрес-20.00лв.<br />
                    <input type='radio' name='deliveryMethod' />Доставка до Офис на Еконт-10.00лв<br />
                  </fieldset>
                  <img className='deliryMethodImg' src='https://www.kokokids.bg/image/catalog/test/econt-logo.jpg' alt='' />
                </div>
                <div className='deliveryMethodBottomSection'>
                  <p className='deliveryMethodInfo'>
                    Артикулите се изпращат чрез куриерска фирма <b>Еконт Експрес.</b>
                    <br />
                    Доставната цена е съобразена спрямо големината на артикулите в количката
                  </p>
                  <p className='deliveryMethodInfo'>
                    <b>Екпресна доставка с Приоритет:</b>
                    <br />
                    При наличност продуктите се изпращат на същия или следващият работен ден.
                  </p>
              </div>
              </div>
            </div>
            <div className='orderNowDiscountCodeWrapper'>
              <span className='discountCodeTitle'>КУПОН / ВАУЧЕР</span>
              <hr />
              <div className='discountCodeContent'>
                <span className='discountCodeText'>Попълнете вашия купон</span>
                <div className='discountCodeInputGroup'>
                  <input type='text' placeholder='Въведете кода тук...' />
                  <span className='discountCodeButton'>ДОБАВИ</span>
                </div>
              </div>
              <p className='discountCodeInfo'>Купонът, ще бъде активиран само върху продукти, които не са в промоция!</p>
            </div>
            <div className='orderNowSubmitOrderWrapper'>
              <span className='submitOrderTitle'>ПОТВЪРДИ ПОРЪЧКАТА</span>
              <hr />
              <textarea placeholder='Допълнителни указания, като цвят, големина и други може да заявите тук.'>
              </textarea>
              <div className='orderNowAgreeRulezWrapper'>
                <input type='checkbox' />
                <span className='agreeRulezText'>Искам да получавам известия от KokoKids - Детски Онлайн магазин за бебешки и детски стоки</span>
                <br />
                <input type='checkbox' />
                <span className='agreeRulezText'>Прочел съм и съм съгласен с Политиката за поверителност</span>
                <br />
                <input type='checkbox' />
                <span className='agreeRulezText'>Прочел съм и съм съгласен с Политиката за ползване</span>
                <br />
              </div>
              <hr />
              <span className='orderNowSubmitButton'>НАПРАВИ ПОРЪЧКА<ArrowForwardIcon /></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OrderNow
