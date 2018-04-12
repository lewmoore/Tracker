import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BillForm from '../components/BillForm';

const Sinon = require('sinon')

Enzyme.configure({adapter: new EnzymeAdapter() });

describe('BillForm component', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <BillForm />
    );
    expect(wrapper.text()).toMatch('Enter your Bills:')
  })

  it('calls handleSubmit fn on click', () => {
    const handleChangeSpy = Sinon.spy(BillForm.prototype, 'handleSubmit')
    const wrapper = shallow(
      <BillForm addNewBillCost={() => {}} addNewBillName={() => {}}/>
    );
    const event = { preventDefault() {}};
    wrapper.find('form').simulate('submit', event)
    expect(handleChangeSpy.calledOnce).toEqual(true)
  })


  // it('user input is displayed onClick', () => {
  //   // handleChangeSpy = Sinon.spy(BillForm.prototype, 'handleSubmit')
  //   const wrapper = shallow(
  //     <BillForm addNewBillName={() => {}} addNewBillCost={() => {}}/>
  //   );
  //   const event = { target: { value: 'Netflix' }, preventDefault() {} }
  //   wrapper.find('form').simulate('submit', event)
  //   expect(wrapper.text()).toMatch('Netflix')
  // })
})
