import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddBill from '../components/AddBill';

Enzyme.configure({adapter: new EnzymeAdapter() });
