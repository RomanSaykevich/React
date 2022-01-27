import React, {useReducer} from 'react';

const reducer = (state, action) =>{
    switch (action.type){
        case 'text':
            return{...state, count1: state.count1 + 'name'}
    }
}

function Forms ()  {
    const [state, dispatch] = useReducer(reducer, {count1: '', count2: ''})

    const formAnim = (e) => {
        const eventForm = {...state, [e.target.name]: e.target.value}
        dispatch({...state, ...eventForm})
    }
    const buttonOnClick = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <form>

                <div> Cat <input type="text" name={''} onChange={dispatch}/></div>
                <button onClick={buttonOnClick}>Save</button>
                <div> Dog <input type="text" name={''} onChange={dispatch}/></div>
                <button onClick={buttonOnClick}>Save</button>

            </form>
        </div>
    );
}

export default Forms;


// <form>
//     <div>{state.count1}</div>
//     <div> Cat <input type="text" name={''} value={state} onChange={formAnim}/></div>
//     <button onClick={buttonOnClick}>Save</button>
// </form>
//
//
// <form>
//     <div>{state.count2}</div>
//     <div> Dog <input type="text" name={''} value={state} onChange={formAnim}/></div>
//     <button onClick={buttonOnClick}>Save</button>
// </form>