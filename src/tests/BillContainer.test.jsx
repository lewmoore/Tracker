import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BillContainer from '../components/BillContainer';

Enzyme.configure({adapter: new EnzymeAdapter() });

describe('BillContainer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = "root"
    ReactDOM.render(<BillContainer />, div);;
  });

  it('Adds a bill to the bills array', () => {
    const wrapper = shallow(
      <BillContainer />
    );
    wrapper.instance().addBillName('Rent')
    expect(wrapper.instance().state.billNames).toEqual(['Rent'])
  })

  it('Component renders with an empty array', () => {
    const wrapper = shallow(
      <BillContainer />
    );
    expect(wrapper.instance().state.billNames).toEqual([])
  })
})
