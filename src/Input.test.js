import Input from "./Input"
import {shallow} from "enzyme"
import {findByAttrib,storeFactory} from "../test/testUtils"

const setup = (initialState={}) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive() // pass store in the component, dive go in the one level
    return wrapper
}


describe('render',()=>{
    describe('word has not been guessed',()=>{
        test('render component without error',()=>{

        })

        test('render input box',()=>{

        })

        test('render input box',()=>{

        })

    })

    describe('word has been guessed',()=>{
        test('render component without error',()=>{

        })

        test('render input box',()=>{

        })

        test('does not render input box',()=>{

        })
    })
});

describe('update state',()=>{
 
});
