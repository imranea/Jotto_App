import Input from "./Input"
import {shallow} from "enzyme"
import {findByAttrib,storeFactory} from "../test/testUtils"

const setup = (initialState={}) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive() // pass store in the component, dive get inside to the class of component, shallow create a virtual component
    return wrapper
}


describe('render',()=>{
    describe('word has not been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success:false}
            wrapper = setup(initialState)
        })
        test('render component without error',()=>{
            const component = findByAttrib(wrapper,"component-input")
            expect(component.length).toBe(1)
        })

        test('render input box',()=>{
            const inputBox = findByAttrib(wrapper,"input-box")
            expect(inputBox.length).toBe(1)
        })

        test('render submit button',()=>{
            const submitButton = findByAttrib(wrapper,"submit-button")
            expect(submitButton.length).toBe(1)
        })

    })

    describe('word has been guessed',()=>{
        let wrapper
        beforeEach(()=>{
            const initialState={success:true}
            wrapper = setup(initialState)
        })
        test('render component without error',()=>{
            const component = findByAttrib(wrapper,"component-input")
            expect(component.length).toBe(1)
        })

        test('render input box',()=>{
            const inputBox = findByAttrib(wrapper,"input-box")
            expect(inputBox.length).toBe(0)
        })

        test('does not render input box',()=>{
            const submitButton = findByAttrib(wrapper,"submit-button")
            expect(submitButton.length).toBe(0)
        })
    })
});

describe('update state',()=>{
 
});
