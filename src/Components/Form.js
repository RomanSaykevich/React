import {useReducer, useRef} from "react";

import {Cats} from "./Cat/Cat";
import {Dogs} from "./Dog/Dog";
import index from './index.css'

const actions = {
    cat: 'cat',
    dog: 'dog',
    catDelet: 'catDelet',
    dogDelet: 'dogDelet'
};

const Reducer = (state, action) => {

    switch (action.type) {

        case actions.cat:

            return {...state, cats: [...state.cats, action.payload.cat]}

        case actions.catDelet:
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}

        case actions.dog:
            return {...state, dogs: [...state.dogs, action.payload.dog]}

        case actions.dogDelet:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}

        default:
            return state
    }
}
const Forms = () => {
    const [state, dispatch] = useReducer(Reducer, {cats: [], dogs: []});
    const catInput = useRef();
    const dogInput = useRef();

    const catPlus = (e) => {
        e.preventDefault();
        const name = catInput.current.value;

        if (!name) {
            return
        }

        const cat = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: actions.cat, payload: {cat}})
        catInput.current.value = ''
    }

    const dogPlus = (e) => {
        e.preventDefault();
        const name = dogInput.current.value;

        if (!name) {
            return
        }

        const dog = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: actions.dog, payload: {dog}})
        dogInput.current.value = ''

    }

    const deleteCat = (id) => {
        dispatch({type: actions.catDelet, payload: {id}})
    }

    const deleteDog = (id) => {
        dispatch({type: actions.dogDelet, payload: {id}})
    }

    return (
        <div>
            <form className={'formd'}>

                <div className={'dogCat'}>
                    <label>Cat: <input ref={catInput} type="text" name={'cat'}/></label>
                    <button onClick={catPlus}>Save</button>
                </div>

                <div className={'dogCat'}>
                    <label>Dog: <input ref={dogInput} type="text" name={'dog'}/></label>
                    <button onClick={dogPlus}>Save</button>
                </div>

            </form>

            <div className={'catDog'}>

                <div className={'deleteCat'}>
                    <Cats cats={state.cats} deleteCat={deleteCat}/>
                </div>

                <div className={'deleteDog'}>
                    <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
                </div>

            </div>
        </div>
    );
};

export default Forms;