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
      <BillForm />
    );
    wrapper.find('form').simulate('submit')
    expect(handleChangeSpy.calledOnce).toEqual(true)
  })
})
