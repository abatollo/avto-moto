import React from 'react';

import AddressImage from '../../img/address.png';

const TabContactInformation = () => {
  return (
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
  );
};

export default TabContactInformation;