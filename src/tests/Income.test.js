import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Income from '../components/Income';
let Sinon = require('sinon')

Enzyme.configure({adapter: new EnzymeAdapter() });

it ('renders component without crashing', () => {
  const div = document.createElement('div')
  div.id = 'root'
  ReactDOM.render(<Income />, div);
})

it('allows you to set your budget', () => {
  const page = mount(<Income />);
  expect(page.text()).toMatch('Set Income:')
})

it('responds to a change in income', () => {
  const handleChangeSpy = Sinon.spy(Income.prototype, 'handleChange');
  // const event = {target: {value: '1000'}};
  const wrapper = shallow(
    <Income />
  );
  wrapper.find('div').simulate('change', {target: {value: '1000'}});
  expect(handleChangeSpy.calledOnce).toEqual(true)
})



// const handleChangeMock = jest.fn();
// const event = {
//   target: { value: '1000' }
// };
// const component = Enzyme.shallow(<Income income={handleChangeMock}/>);
// component.find('input').simulate('change', event);
// expect(handleChangeMock).toBeCalledWith('1000')
