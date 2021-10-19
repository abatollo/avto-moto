import React from 'react';

const SectionSpecifications = () => {
  return (
    <section className="section-specifications">
      <h2 className="visually-hidden">Характеристики</h2>
      <table className="section-specifications__table">
        <tbody>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Трансмиссия
            </td>
            <td className="section-specifications__data">
              Роботизированная
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Мощность двигателя, л.с.
            </td>
            <td className="section-specifications__data">
              249
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Тип двигателя
            </td>
            <td className="section-specifications__data">
              Бензиновый
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Привод
            </td>
            <td className="section-specifications__data">
              Полный
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Объем двигателя, л
            </td>
            <td className="section-specifications__data">
              2.4
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Макс. крутящий момент
            </td>
            <td className="section-specifications__data">
              370/4500
            </td>
          </tr>
          <tr className="section-specifications__row">
            <td className="section-specifications__data">
              Количество цилиндров
            </td>
            <td className="section-specifications__data">
              4
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SectionSpecifications;
