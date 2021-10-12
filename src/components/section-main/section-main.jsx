import React, {useState} from 'react';

import Marpekh1FullJPG from '../../img/marpekh-1-full.jpg';
import Marpekh1FullWEBP from '../../img/marpekh-1-full.webp';
import Marpekh1FullAVIF from '../../img/marpekh-1-full.avif';

import Marpekh1FullX2JPG from '../../img/marpekh-1-full@2x.jpg';
import Marpekh1FullX2WEBP from '../../img/marpekh-1-full@2x.webp';
import Marpekh1FullX2AVIF from '../../img/marpekh-1-full@2x.avif';

import Marpekh1FullX3JPG from '../../img/marpekh-1-full@3x.jpg';
import Marpekh1FullX3WEBP from '../../img/marpekh-1-full@3x.webp';
import Marpekh1FullX3AVIF from '../../img/marpekh-1-full@3x.avif';

import Marpekh1ThumbnailJPG from '../../img/marpekh-1-thumbnail.jpg';
import Marpekh1ThumbnailWEBP from '../../img/marpekh-1-thumbnail.webp';
import Marpekh1ThumbnailAVIF from '../../img/marpekh-1-thumbnail.avif';

import Marpekh1ThumbnailX2JPG from '../../img/marpekh-1-thumbnail@2x.jpg';
import Marpekh1ThumbnailX2WEBP from '../../img/marpekh-1-thumbnail@2x.webp';
import Marpekh1ThumbnailX2AVIF from '../../img/marpekh-1-thumbnail@2x.avif';

import Marpekh1ThumbnailX3JPG from '../../img/marpekh-1-thumbnail@3x.jpg';
import Marpekh1ThumbnailX3WEBP from '../../img/marpekh-1-thumbnail@3x.webp';
import Marpekh1ThumbnailX3AVIF from '../../img/marpekh-1-thumbnail@3x.avif';

import Marpekh2FullJPG from '../../img/marpekh-2-full.jpg';
import Marpekh2FullWEBP from '../../img/marpekh-2-full.webp';
import Marpekh2FullAVIF from '../../img/marpekh-2-full.avif';

import Marpekh2FullX2JPG from '../../img/marpekh-2-full@2x.jpg';
import Marpekh2FullX2WEBP from '../../img/marpekh-2-full@2x.webp';
import Marpekh2FullX2AVIF from '../../img/marpekh-2-full@2x.avif';

import Marpekh2FullX3JPG from '../../img/marpekh-2-full@3x.jpg';
import Marpekh2FullX3WEBP from '../../img/marpekh-2-full@3x.webp';
import Marpekh2FullX3AVIF from '../../img/marpekh-2-full@3x.avif';

import Marpekh2ThumbnailJPG from '../../img/marpekh-2-thumbnail.jpg';
import Marpekh2ThumbnailWEBP from '../../img/marpekh-2-thumbnail.webp';
import Marpekh2ThumbnailAVIF from '../../img/marpekh-2-thumbnail.avif';

import Marpekh2ThumbnailX2JPG from '../../img/marpekh-2-thumbnail@2x.jpg';
import Marpekh2ThumbnailX2WEBP from '../../img/marpekh-2-thumbnail@2x.webp';
import Marpekh2ThumbnailX2AVIF from '../../img/marpekh-2-thumbnail@2x.avif';

import Marpekh2ThumbnailX3JPG from '../../img/marpekh-2-thumbnail@3x.jpg';
import Marpekh2ThumbnailX3WEBP from '../../img/marpekh-2-thumbnail@3x.webp';
import Marpekh2ThumbnailX3AVIF from '../../img/marpekh-2-thumbnail@3x.avif';

import Marpekh3FullJPG from '../../img/marpekh-3-full.jpg';
import Marpekh3FullWEBP from '../../img/marpekh-3-full.webp';
import Marpekh3FullAVIF from '../../img/marpekh-3-full.avif';

import Marpekh3FullX2JPG from '../../img/marpekh-3-full@2x.jpg';
import Marpekh3FullX2WEBP from '../../img/marpekh-3-full@2x.webp';
import Marpekh3FullX2AVIF from '../../img/marpekh-3-full@2x.avif';

import Marpekh3FullX3JPG from '../../img/marpekh-3-full@3x.jpg';
import Marpekh3FullX3WEBP from '../../img/marpekh-3-full@3x.webp';
import Marpekh3FullX3AVIF from '../../img/marpekh-3-full@3x.avif';

import Marpekh3ThumbnailJPG from '../../img/marpekh-3-thumbnail.jpg';
import Marpekh3ThumbnailWEBP from '../../img/marpekh-3-thumbnail.webp';
import Marpekh3ThumbnailAVIF from '../../img/marpekh-3-thumbnail.avif';

import Marpekh3ThumbnailX2JPG from '../../img/marpekh-3-thumbnail@2x.jpg';
import Marpekh3ThumbnailX2WEBP from '../../img/marpekh-3-thumbnail@2x.webp';
import Marpekh3ThumbnailX2AVIF from '../../img/marpekh-3-thumbnail@2x.avif';

import Marpekh3ThumbnailX3JPG from '../../img/marpekh-3-thumbnail@3x.jpg';
import Marpekh3ThumbnailX3WEBP from '../../img/marpekh-3-thumbnail@3x.webp';
import Marpekh3ThumbnailX3AVIF from '../../img/marpekh-3-thumbnail@3x.avif';

import FuelIcon from '../../img/icon-fuel.svg';
import TransmissionIcon from '../../img/icon-transmission.svg';
import HorsepowerIcon from '../../img/icon-horsepower.svg';
import EngineIcon from '../../img/icon-engine.svg';

import StarsIcon from '../../img/icon-stars.svg';

import AddressImage from '../../img/address.png';

const SectionMain = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [currentTab, setCurrentTab] = useState(`product-tab-specifications`);

    const prevSlideButtonClickHandler = () => {
        setCurrentSlide((prevState) => --prevState);
    };
    const nextSlideButtonClickHandler = () => {
        setCurrentSlide((prevState) => ++prevState);
    };

    return (
        <main className="main container center">
            <section>
                <div className="slider">
                    {currentSlide === 1 &&
                    <picture>
                        <source width="600" height="375" srcSet={`${Marpekh1FullAVIF} 1x, ${Marpekh1FullX2AVIF} 2x, ${Marpekh1FullX3AVIF} 3x`} type="image/avif" />
                        <source width="600" height="375" srcSet={`${Marpekh1FullWEBP} 1x, ${Marpekh1FullX2WEBP} 2x, ${Marpekh1FullX3WEBP} 3x`} type="image/webp" />
                        <img width="600" height="375" srcSet={`${Marpekh1FullJPG} 1x, ${Marpekh1FullX2JPG} 2x, ${Marpekh1FullX3JPG} 3x`} src={Marpekh1FullJPG} alt="Чёрный роадстер сфотографироован под углом" />
                    </picture>}
                    {currentSlide === 2 &&
                    <picture>
                        <source width="600" height="375" srcSet={`${Marpekh2FullAVIF} 1x, ${Marpekh2FullX2AVIF} 2x, ${Marpekh2FullX3AVIF} 3x`} type="image/avif" />
                        <source width="600" height="375" srcSet={`${Marpekh2FullWEBP} 1x, ${Marpekh2FullX2WEBP} 2x, ${Marpekh2FullX3WEBP} 3x`} type="image/webp" />
                        <img width="600" height="375" srcSet={`${Marpekh2FullJPG} 1x, ${Marpekh2FullX2JPG} 2x, ${Marpekh2FullX3JPG} 3x`} src={Marpekh2FullJPG} alt="Кожаный салон чёрного роадстера" />
                    </picture>}
                    {currentSlide === 3 &&
                    <picture>
                        <source width="600" height="375" srcSet={`${Marpekh3FullAVIF} 1x, ${Marpekh3FullX2AVIF} 2x, ${Marpekh3FullX3AVIF} 3x`} type="image/avif" />
                        <source width="600" height="375" srcSet={`${Marpekh3FullWEBP} 1x, ${Marpekh3FullX2WEBP} 2x, ${Marpekh3FullX3WEBP} 3x`} type="image/webp" />
                        <img width="600" height="375" srcSet={`${Marpekh3FullJPG} 1x, ${Marpekh3FullX2JPG} 2x, ${Marpekh3FullX3JPG} 3x`} src={Marpekh3FullJPG} alt="Приборная панель чёрного роадстера" />
                    </picture>}
                </div>
                <div className="slider_controls">
                    <button 
                        className="slider_controls_btn slider_controls_btn--prev"
                        type="button" 
                        onClick={prevSlideButtonClickHandler}
                    >
                        Назад
                    </button>
                    <picture>
                        <source width="128" height="80" srcSet={`${Marpekh1ThumbnailAVIF} 1x, ${Marpekh1ThumbnailX2AVIF} 2x, ${Marpekh1ThumbnailX3AVIF} 3x`} type="image/avif" />
                        <source width="128" height="80" srcSet={`${Marpekh1ThumbnailWEBP} 1x, ${Marpekh1ThumbnailX2WEBP} 2x, ${Marpekh1ThumbnailX3WEBP} 3x`} type="image/webp" />
                        <img width="128" height="80" srcSet={`${Marpekh1ThumbnailJPG} 1x, ${Marpekh1ThumbnailX2JPG} 2x, ${Marpekh1ThumbnailX3JPG} 3x`} src={Marpekh1ThumbnailJPG} alt="Чёрный роадстер сфотографироован под углом" />
                    </picture>
                    <picture>
                        <source width="128" height="80" srcSet={`${Marpekh2ThumbnailAVIF} 1x, ${Marpekh2ThumbnailX2AVIF} 2x, ${Marpekh2ThumbnailX3AVIF} 3x`} type="image/avif" />
                        <source width="128" height="80" srcSet={`${Marpekh2ThumbnailWEBP} 1x, ${Marpekh2ThumbnailX2WEBP} 2x, ${Marpekh2ThumbnailX3WEBP} 3x`} type="image/webp" />
                        <img width="128" height="80" srcSet={`${Marpekh2ThumbnailJPG} 1x, ${Marpekh2ThumbnailX2JPG} 2x, ${Marpekh2ThumbnailX3JPG} 3x`} src={Marpekh2ThumbnailJPG} alt="Кожаный салон чёрного роадстера" />
                    </picture>
                    <picture>
                        <source width="128" height="80" srcSet={`${Marpekh3ThumbnailAVIF} 1x, ${Marpekh3ThumbnailX2AVIF} 2x, ${Marpekh3ThumbnailX3AVIF} 3x`} type="image/avif" />
                        <source width="128" height="80" srcSet={`${Marpekh3ThumbnailWEBP} 1x, ${Marpekh3ThumbnailX2WEBP} 2x, ${Marpekh3ThumbnailX3WEBP} 3x`} type="image/webp" />
                        <img width="128" height="80" srcSet={`${Marpekh3ThumbnailJPG} 1x, ${Marpekh3ThumbnailX2JPG} 2x, ${Marpekh3ThumbnailX3JPG} 3x`} src={Marpekh3ThumbnailJPG} alt="Приборная панель чёрного роадстера" />
                    </picture>
                    <button 
                        className="slider_controls_btn slider_controls_btn--next"
                        type="button" 
                        onClick={nextSlideButtonClickHandler}
                    >
                        Вперёд
                    </button>
                </div>
            </section>
            <section className="product-brief">
                <h2 className="product-brief__heading">Марпех 11</h2>
                <ul className="product-brief__list">
                    <li className="product-brief__list-item">
                        <img className="product-brief__list-item-image" width="24" height="22" src={FuelIcon} alt="" />
                        <div className="product-brief__list-item-label">Бензин</div>
                    </li>
                    <li className="product-brief__list-item">
                        <img className="product-brief__list-item-image" width="26" height="24" src={TransmissionIcon} alt="" />
                        <div className="product-brief__list-item-label">Механика</div>
                    </li>
                    <li className="product-brief__list-item">
                        <img className="product-brief__list-item-image" width="32" height="21" src={HorsepowerIcon} alt="" />
                        <div className="product-brief__list-item-label">100 л.с.</div>
                    </li>
                    <li className="product-brief__list-item">
                        <img className="product-brief__list-item-image" width="30" height="23" src={EngineIcon} alt="" />
                        <div className="product-brief__list-item-label">1.4 л</div>
                    </li>
                </ul>
                <div className="product-brief__price">2 300 000 ₽</div>
                <div className="product-brief__price-old">2 400 000 ₽</div>
                <button className="product-brief__application-button" type="button">
                    Оставить заявку
                </button>
                <button className="product-brief__credit-button" type="button">
                    В кредит от 11 000 ₽
                </button>
            </section>

            <section className="section-tabs">
                <ul className="section-tabs__list">
                    <li className="section-tabs__list-item">
                        <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-specifications" checked={currentTab === `product-tab-specifications`} />
                        <label className="section-tabs__list-item-label" htmlFor="product-tab-specifications" onClick={() => {setCurrentTab(`product-tab-specifications`)}}>
                            Характеристики
                        </label>
                    </li>
                    <li className="section-tabs__list-item">
                        <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-reviews" checked={currentTab === `product-tab-reviews`} />
                        <label className="section-tabs__list-item-label" htmlFor="product-tab-reviews" onClick={() => {setCurrentTab(`product-tab-reviews`)}}>
                            Отзывы
                        </label>
                    </li>
                    <li className="section-tabs__list-item">
                        <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-contact-information" checked={currentTab === `product-tab-contact-information`} />
                        <label className="section-tabs__list-item-label" htmlFor="product-tab-contact-information" onClick={() => {setCurrentTab(`product-tab-contact-information`)}}>
                            Контакты
                        </label>
                    </li>
                </ul>

                {currentTab === `product-tab-specifications` &&
                    <table className="section-tabs__specifications specifications-table">
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Трансмиссия
                            </td>
                            <td className="specifications-table__data">
                                Роботизированная
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Мощность двигателя, л.с.
                            </td>
                            <td className="specifications-table__data">
                                249
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Тип двигателя
                            </td>
                            <td className="specifications-table__data">
                                Бензиновый
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Привод
                            </td>
                            <td className="specifications-table__data">
                                Полный
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Объем двигателя, л
                            </td>
                            <td className="specifications-table__data">
                                2.4
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Макс. крутящий момент
                            </td>
                            <td className="specifications-table__data">
                                370/4500
                            </td>
                        </tr>
                        <tr className="specifications-table__row">
                            <td className="specifications-table__data">
                                Количество цилиндров
                            </td>
                            <td className="specifications-table__data">
                                4
                            </td>
                        </tr>
                    </table>
                }

                {currentTab === `product-tab-reviews` &&
                    <ul className="reviews">
                        <a className="reviews__add-button" href="/new-feedback" onClick={(evt) => {evt.preventDefault(); console.log(`new feedback button click`); setIsPopupOpened(true);}}>Оставить отзыв</a>
                        <li className="reviews-item">
                            <article>
                                <div className="reviews-item__name">Борис Иванов</div>
                                <dl>
                                    <dt className="reviews-item__subheading reviews-item__subheading--plus">
                                        Достоинства
                                    </dt>
                                    <dd className="reviews-item__description">
                                        мощность, внешний вид
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="reviews-item__subheading reviews-item__subheading--minus">
                                        Недостатки
                                    </dt>
                                    <dd className="reviews-item__description">
                                        Слабые тормозные колодки (пришлось заменить)
                                    </dd>
                                </dl>
                                <h3 className="reviews-item__heading">Комментарий</h3>
                                <div className="reviews-item__comment">
                                    Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
                                </div>
                                <img src={StarsIcon} alt="" />
                                <div className="reviews-item__recomendation">Советует</div> 
                                <div className="reviews-item__time">1 минуту назад</div>
                                <button className="reviews-item__reply-button" type="button">Ответить</button>
                            </article>
                        </li>
                        <li>
                            <article>
                                <div className="reviews-item__name">Марсель Исмагилов</div>
                                <dl>
                                    <dt className="reviews-item__subheading reviews-item__subheading--plus">
                                        Достоинства
                                    </dt>
                                    <dd className="reviews-item__description">
                                        Cтиль, комфорт, управляемость
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="reviews-item__subheading reviews-item__subheading--minus">
                                        Недостатки
                                    </dt>
                                    <dd className="reviews-item__description">
                                        Дорогой ремонт и обслуживание
                                    </dd>
                                </dl>
                                <h3 className="reviews-item__heading">Комментарий</h3>
                                <div className="reviews-item__comment">
                                    Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
                                </div>
                                <img src={StarsIcon} alt="" />
                                <div className="reviews-item__recomendation">Советует</div> 
                                <div className="reviews-item__time">1 минуту назад</div>
                                <button className="reviews-item__reply-button" type="button">Ответить</button>
                            </article>
                        </li>
                    </ul>
                }

                {currentTab === `product-tab-contact-information` &&
                    <section className="contact-information">
                        <dl>
                            <dt className="contact-information-heading">Адрес</dt>
                            <dd className="contact-information-description">Санкт-Петербург, набережная реки Карповки, дом 5</dd>
                            <dt className="contact-information-heading">Режим работы</dt>
                            <dd className="contact-information-description">Ежедневно, с 10:00 до 21:00</dd>
                            <dt className="contact-information-heading">Телефон</dt>
                            <dd className="contact-information-description"><a className="contact-information-link" href="tel:88003335599">8 (800) 333-55-99</a></dd>
                            <dt className="contact-information-heading">E-mail</dt>
                            <dd className="contact-information-description"><a className="contact-information-link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></dd>
                        </dl>
                        <img src={AddressImage} alt="" />
                    </section>
                }
            </section>
            
            {isPopupOpened &&
                <section className="popup">
                    <div className="popup__wrapper">
                        <h2 className="popup__heading">Оставить отзыв</h2>
                        <form className="popup__form" action="">
                            <input type="text" name="" id="" placeholder="Имя" />
                            <input type="text" name="" id="" placeholder="Достоинства" />
                            <input type="text" name="" id="" placeholder="Недостатки"  />
                            <div>Оцените товар:</div>
                            <img src={StarsIcon} alt="" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Комментарий"></textarea>
                        </form>
                        <button htmlFor="" type="submit">Оставить отзыв</button>
                        <button type="button" onClick={() => {console.log(`close new feedback button click`); setIsPopupOpened(false);}}>Закрыть</button>
                    </div>
                </section>
            }
        </main>
    );
}

export { SectionMain };