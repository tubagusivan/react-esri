import React from 'react'
import { shallow } from 'enzyme';
import Hero from '../component/Hero'

global.URL.createObjectURL = jest.fn();

describe('Test case for <Hero /> component',() =>{
  let wrapper;
  test('check component',() => {
    wrapper = shallow(<Hero />);
    expect(wrapper)
  })
})