import currencyFormatter from '../helpers/currencyFormatter.js';
import React from 'react';

const HouseRow = ({house: {address, country, price}}) => {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
        </tr>
    );
}

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMem };