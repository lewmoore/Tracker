import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../components/App';

Enzyme.configure({adapter: new EnzymeAdapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root'
  ReactDOM.render(<App />, div);;
});

it ('Renders welcome message', () => {
  const page = mount(<App />);
  expect(page.text()).toMatch('Tracker')
})
