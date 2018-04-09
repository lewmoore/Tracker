import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BillList from '../components/BillList';

Enzyme.configure({adapter: new EnzymeAdapter() });

it('renders the component', () => {
  const wrapper = shallow(
    <BillList />
  );
  expect(wrapper.text()).toMatch('Bills:')
})

it('takes and renders given props', () => {
  const wrapper = shallow(
    <BillList bills={["Netflix"]} />
  )
  expect(wrapper.text()).toMatch('Netflix')
})
