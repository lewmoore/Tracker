import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddBill from '../components/AddBill';
import BillContainer from '../components/BillContainer'
let Sinon = require('sinon')

Enzyme.configure({adapter: new EnzymeAdapter() });

it('renders the component', () => {
  const div = document.createElement('div')
  div.id = 'root'
  ReactDOM.render(<AddBill />, div);
})

it('Adds a bill to the list', () => {
  const clickSpy = Sinon.spy(AddBill.prototype, 'handleAddNew');
  const wrapper = shallow(
    <AddBill addNew={() => {}}/>
  );
  wrapper.find('button').simulate('click');
  expect(clickSpy.calledOnce).toEqual(true)
})
