import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
    logo: {},
    service: [],
    
};

function state(state = INITIAL_STATE, action) {
    switch(action.types){
        default:
            return state;
    }
    
}

export default state;