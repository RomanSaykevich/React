import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: 0}
        case 'inc2':
            return {...state, count2: state.count2 + 5}
        case 'dec2':
            return {...state, count2: state.count2 - 5}
        case 'reset2':
            return {...state, count2: 5}
        case 'inc3':
            return {...state, count3: state.count3 + 10}
        case 'dec3':
            return {...state, count3: state.count3 - 10}
        case 'reset3':
            return {...state, count3: 10}
    }
    return state
}

function Component() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 5, count3: 10})


    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc1'})}>INC1</button>
            <button onClick={() => dispatch({type: 'dec1'})}>DEC1</button>
            <button onClick={() => dispatch({type: 'reset1'})}>RESET1</button>

            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>INC2</button>
            <button onClick={() => dispatch({type: 'dec2'})}>DEC2</button>
            <button onClick={() => dispatch({type: 'reset2'})}>RESET2</button>

            <div>{state.count3}</div>
            <button onClick={() => dispatch({type: 'inc3'})}>INC3</button>
            <button onClick={() => dispatch({type: 'dec3'})}>DEC3</button>
            <button onClick={() => dispatch({type: 'reset3'})}>RESET3</button>

        </div>
    );
}

export default Component;