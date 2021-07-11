import { BUY_ICECREAM } from "./iceCreamsTypes";
const initialState= {
    numOficeCream:20
}
const iceCreamReducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:return{
            ...state,
            numOficeCream:state.numOficeCream-1
        }
        default: return state
            break;
    }
}

export default iceCreamReducer;