import React from 'react';
import { useDispatch } from 'react-redux';
import * as ActionsCreators from '../Redux/ActionsCreators' 

const Buttons = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(ActionsCreators.incrementer(1))}>Incremneter</button>
            <button onClick={() => dispatch({type:'INCREMENT', payload:5})}>Incrementer 5</button>
            <button onClick={() => dispatch(ActionsCreators.decrementer(1))}>Decremneter</button>
            <button onClick={() => dispatch(ActionsCreators.initialiser())}>Initailiser</button>
        </div>
    );
}

export default Buttons;
