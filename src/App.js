import React, {useEffect, useState} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import {userServ} from "./services/user.service/user.service";
import Users from "./components/Users/Users";

const App = () => {

    const [users, setUsers] = useState([]);
    const [userFi, setUserFi] = useState([]);

    useEffect(() => {
        userServ.getAll()
            .then(value => {
                setUsers([...value])
                setUserFi([...value])

            })

    }, [])
    const getFilter = (data) => {
        let filterRe = [...users]

        if (data.name) {
            filterRe = filterRe.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterRe = filterRe.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterRe = filterRe.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setUserFi(filterRe)

    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={userFi}/>

        </div>
    );
};

export default App;