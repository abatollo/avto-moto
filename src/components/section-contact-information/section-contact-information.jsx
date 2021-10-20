import React from 'react';

const SectionContactInformation = () => {
  return (
    <section className="section-contact-information">
      <h2 className="visually-hidden">Контактная информация</h2>
      <h3 className="section-contact-information__subheading">Адрес</h3>
      <p className="section-contact-information__description">Санкт-Петербург,<br /> набережная реки Карповки, дом 5</p>
      <h3 className="section-contact-information__subheading">Режим работы</h3>
      <p className="section-contact-information__description">Ежедневно, с 10:00 до 21:00</p>
      <h3 className="section-contact-information__subheading">Телефон</h3>
      <p className="section-contact-information__description"><a className="section-contact-information__link" href="tel:88003335599">8 (800) 333-55-99</a></p>
      <h3 className="section-contact-information__subheading">E-mail</h3>
      <p className="section-contact-information__description"><a className="section-contact-information__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></p>
      <iframe className="section-contact-information__map" title="Адрес Санкт-Петербург, набережная реки Карповки, дом 5 на карте" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8300125432181!2d30.314303316174463!3d59.96814316668017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1634639320408!5m2!1sru!2sru" width="431" height="271" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </section>
  );
};

export default SectionContactInformation;