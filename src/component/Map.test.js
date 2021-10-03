import React from 'react'
import { shallow } from 'enzyme';
import Map from '../component/Map'

global.URL.createObjectURL = jest.fn();

describe('Test case for <Map /> component',() =>{
  let wrapper;
  test('check component',() => {
    wrapper = shallow(<Map />);
    expect(wrapper)
  })
})