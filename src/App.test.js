import React from 'react'
import { shallow } from 'enzyme';
import App from './App';

global.URL.createObjectURL = jest.fn();

describe('Test case for <App /> component',() =>{
  let wrapper;
  test('check component',() => {
    wrapper = shallow(<App />);
    expect(wrapper)
  })
})