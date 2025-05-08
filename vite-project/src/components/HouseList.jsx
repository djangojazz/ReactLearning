import { useState } from "react";
import HouseRow from "./HouseRow";
import { useEffect, useRef } from "react";
import { HouseRowMem } from "./HouseRow";

const HouseList = ({selectHouse}) => {
    const [houses, setHouses] = useState([]);
    const counter = useRef(0);

    useEffect(() => {
        const fetchHouses = async () => {
        const response = await fetch("https://localhost:4000/house");
        const houses = await response.json();
        setHouses(houses);
        };

        fetchHouses();
        counter.current++;
    }, []);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: houses.length + 1,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            }
        ]);
    }

    return (
        <>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </tr>
            </thead>
            <tbody>
                {houses.map(h => <HouseRowMem key={h.id} selectHouse={selectHouse} house={h} />)}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
            Add
        </button>
        </>
    );
};

export default HouseList;