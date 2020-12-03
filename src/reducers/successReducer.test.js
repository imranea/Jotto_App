import {actionTypes} from "../actions"
import successReducer from "./successReducer"

test('return default initial state for "false" when no action',()=>{
    const newState = successReducer(undefined,{});
    expect(newState).toBe(false)
})

test('return state of true upon receving an action of type "CORRECT_GUESS"',()=>{
    const newState = successReducer(undefined,{type:actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
})