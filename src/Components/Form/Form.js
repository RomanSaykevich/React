import React from 'react';
import {useDispatch} from "react-redux";
import {addKiwis} from "../../Slice";

const Form = () => {
    const dispatch = useDispatch();
    const submit = (e)=> {
e.preventDefault()
        dispatch(addKiwis({kiwi: e.target.kiwi.value}))
        e.target.reset()
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'kiwi'}/>
            <button>Save</button>
        </form>
    );
};

export default Form;