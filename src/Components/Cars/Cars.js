import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "../Car/Car";
import {getAllCars} from "../../Store";
import {Form} from "../Form/Form";

const Cars = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <div>
            <Form/>
            {status==="loading"&& <h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};