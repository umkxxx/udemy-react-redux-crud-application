import { INCREMENT, EDCREMENT } from '../actions'

const initState = {val:0}

export default (state=initState, action) => {
    switch(action.type){
        case INCREMENT:
            return {val:state.val+3}
        case DECREMENT:
            return {val:state.val-3}
        default:
            return state
    }
}