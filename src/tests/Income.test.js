import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Income from '../components/Income';

Enzyme.configure({adapter: new EnzymeAdapter() });

it ('renders component without crashing', () => {
  const div = document.createElement('div')
  div.id = 'root'
  ReactDOM.render(<Income />, div);
})

it('allows you to set your budget', () => {
  const page = mount(<Income />);
  expect(page.text()).toMatch('Set Budget:')
})
