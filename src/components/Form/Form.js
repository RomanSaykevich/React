import React, {useState} from 'react';
import filt from './filt.css'

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username:'',email:''})

    const formUser = (e) =>{
       const eventForm = {...form, [e.target.name]:e.target.value}
        setForm ({...form, ...eventForm})

    }
    const buttonOnClick = (e) => {
        e.preventDefault()
        getFilter(form)
    }
    return (
        <div className={'filter'}>
            <form className={'filter2'}>
                <div> Name <input type="text" name={'name'} value={form.name} onChange={formUser}/></div>
                <div> Username <input type="text" name={'username'} value={form.username} onChange={formUser}/></div>
                <div> Email <input type="text" name={'email'} value={form.email} onChange={formUser}/></div>
                <button onClick={buttonOnClick} className={'btn'}>Filter Users</button>
                
            </form>
        </div>
    );
};

export default Form;