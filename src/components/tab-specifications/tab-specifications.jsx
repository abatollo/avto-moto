import React from 'react';

const TabSpecifications = () => {
  return (
    <table className="section-tabs__specifications specifications-table">
      <tbody>
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
      </tbody>
    </table>
  );
};

export default TabSpecifications;
