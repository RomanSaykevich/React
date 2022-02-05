import React from 'react';
import Form from "./Components/Form/Form";
import Kiwis from "./Components/Kiwis/Kiwis";
import cont from "./cont.css"

const App = () => {
    return (
        <div className={'container'}>

            <Form/>
            <Kiwis/>
        </div>
    );
};

export default App;
