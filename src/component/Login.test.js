import React from 'react'
import { shallow } from 'enzyme';
import Login from '../component/Login'

describe('Test case for <Login /> component',() =>{
  let wrapper;
  let email;
  let password;
  
  test('check <Login> component',() => {
    wrapper = shallow(<Login/>);
    expect(wrapper)
  })

  test('should have an email field', () => {
    expect(wrapper.find('input[type="email"]').length).toEqual(1);
  });

  test('should set the email value on change event',() => {
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'dev@email.com' } })
    email = wrapper.find('input[name="email"]')
  })

  test('should email must be filled',() => {
    expect(email.render().attr('value').length).not.toEqual(0)
  })

  test('should have a password field', () => {
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
  });

  test('should set the password value on change event',() => {
    wrapper.find('input[name="password"]').simulate('change', { target: { value: 'dev1234' } })
    password = wrapper.find('input[name="password"]')
  })

  test('should password must be filled',() => {
    expect(password.render().attr('value').length).not.toEqual(0)
  })

  test('check for component button',() => {
    let button = wrapper.find('button[name="submit"]')
    expect(button.length).toEqual(1)
  })
})