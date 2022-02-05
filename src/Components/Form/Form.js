import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {updateCarById} from "../../Store";

const Form = () => {
    const {carForUpdate} = useSelector(state => state['carReducer']);

    const {handleSubmit, setValue, register} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (

        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>

        </form>
    );
};

export {Form};