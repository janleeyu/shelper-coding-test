import Immutable from 'seamless-immutable';

const initial_state = Immutable({
    
});

export default (state = initial_state, action) => {
    switch (action.type) {

        default:
            return state;
    }   
}