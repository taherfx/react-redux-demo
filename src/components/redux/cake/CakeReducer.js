import { BUY_CAKE } from "./CakeTypes"

const initialState = {
    noOfCake: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCake: state.noOfCake - action.payload
            }
        default:
            return state
    }
}

export default cakeReducer;