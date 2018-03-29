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
})
