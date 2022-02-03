import React from 'react';

// import {deleteCar} from "../../Store";

const Car = ({car: {id, model, price, year}}) => {



    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            {/*<button onClick={() => dispatch(deleteCar({id}))}>Delete</button>*/}
        </div>
    );
};

export default Car;