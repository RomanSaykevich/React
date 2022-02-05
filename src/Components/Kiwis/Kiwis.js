import React from 'react';
import {useSelector} from "react-redux";
import Kiwi from "../Kiwi/Kiwi";

const Kiwis = () => {

    const {kiwis} = useSelector(state => state['kiwi']);


    return (
        <div>
            {kiwis.map(kiwi => <Kiwi key={kiwi.id} kiwi={kiwi}/>)}
        </div>
    );
};

export default Kiwis;