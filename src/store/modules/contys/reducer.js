import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
    login: false,
    service: [],
    
};

function state(state = INITIAL_STATE, action) {
    switch(action.types){
        default:
            return state;
    }
    
}

export default state;