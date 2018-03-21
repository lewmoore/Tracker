import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Welcome from '../components/Welcome';

Enzyme.configure({adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = "root"
  ReactDOM.render(<Welcome />, div);;
});
