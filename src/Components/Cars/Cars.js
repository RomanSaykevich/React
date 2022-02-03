import React, {useEffect} from 'react';
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {allCars} from "../../Store";

const Cars = () => {

    const {cars} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(allCars())
  },[])

    return (
        <div>
            <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export default Cars;


