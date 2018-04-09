import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddBill from '../components/AddBill';

const Sinon = require('sinon')

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders the component', () => {
  const div = document.createElement('div')
  div.id = 'root'
  ReactDOM.render(<AddBill />, div);
})

it('Adds a bill to the list', () => {
  const clickSpy = Sinon.spy(AddBill.prototype, 'handleAddNew');
  const wrapper = shallow(<AddBill addNew={() => {}} />);
  wrapper.find('button').simulate('click');
  expect(clickSpy.calledOnce).toEqual(true)
});

it('Responds to adding a new bill', () => {
  const handleChangeSpy = Sinon.spy(AddBill.prototype, 'updateNewBill');
  const event = { target: { value: 'Netflix' } };
  const wrapper = shallow(<AddBill />);
  wrapper.find('input[id="addBill"]').simulate('change', event);
  expect(handleChangeSpy.calledOnce).toEqual(true)
});
