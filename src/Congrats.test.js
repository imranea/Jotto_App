import Congrat from "./Congrats"
import Enzyme,{shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import {findByAttrib} from "../test/testUtils"

Enzyme.configure({adapter:new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    return shallow(<Congrat {...props}/>)
}

test("renders without Error",()=>{
    const wrapper = setup()
    const congratComponent = findByAttrib(wrapper,"component-congrats")
    expect(congratComponent.length).toBe(1)
})

test("renders no text when 'success' prop is false",()=>{
    const wrapper = setup({success:false})
    const congratComponent = findByAttrib(wrapper,"component-congrats")
    expect(congratComponent.text()).toBe('')
})

test("renders non-empty congrats message when 'success' prop is true",()=>{
    const wrapper = setup({success:true})
    const message = findByAttrib(wrapper,"congrats-message")
    expect(message.text().length).not.toBe(0)
})