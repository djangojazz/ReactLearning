import currencyFormatter from '../helpers/currencyFormatter.js';
import React, { useContext } from 'react';
import navigationContext from '../helpers/navigationContext.js';
import navValues from '../helpers/navValues.js';
import { useNavigate } from 'react-router';

const HouseRow = ({ house }) => {
    //const { navigate } = useContext(navigationContext);
    const navigate = useNavigate();
    return (
        <tr onClick={() => navigate(`/house`, { state: { house }})}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>}
        </tr>
    );
}

export default HouseRow;