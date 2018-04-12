import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BillForm from '../components/BillForm';
<<<<<<< HEAD
const Sinon = require('sinon')
=======
>>>>>>> 9918a7a3c0d661a91bbd2a7c4c43db179ee77b86

Enzyme.configure({adapter: new EnzymeAdapter() });

describe('BillForm component', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <BillForm />
    );
<<<<<<< HEAD
    expect(wrapper.text()).toMatch('Enter your Bills:')
  })

  it('calls handleSubmit fn on click', () => {
    const handleChangeSpy = Sinon.spy(BillForm.prototype, 'handleSubmit')
    const wrapper = shallow(
      <BillForm />
    );
    wrapper.find('form').simulate('submit')
    expect(handleChangeSpy.calledOnce).toEqual(true)
=======
    expect(wrapper.text()).toMatch('Hello')
>>>>>>> 9918a7a3c0d661a91bbd2a7c4c43db179ee77b86
  })
})
