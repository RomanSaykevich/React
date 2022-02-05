import React from 'react';
import {useDispatch} from "react-redux";
import {kiwiDel, minuStat} from "../../Slice";

import {mnus} from "./mnus.css"

const Kiwi = ({kiwi}) => {

const {id,name,status}=kiwi;
const dispatch = useDispatch();

    return (
        <div className={'foter'}>
            <input type='checkbox' value={status} onChange={()=> dispatch(minuStat({id}))}/>
            <div className={status?'munis':""}><h3>{name}</h3></div>
            <button onClick={()=>dispatch(kiwiDel({id}))}>Delete</button>
        </div>
    );
};

export default Kiwi;