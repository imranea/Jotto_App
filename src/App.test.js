import App from './App';
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

const setup = (props) => {
    return shallow(<App {...props}/>)
}

test('render without error', () => {
  const wrapper = setup()
  const appComponent = findByAttrib(wrapper,"component-app")
  expect(appComponent.length).toBe(1)
});
