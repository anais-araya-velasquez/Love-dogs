import React from 'react';
import { shallow } from 'enzyme';
import Filtro from './filtro';

describe('Filtro', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Filtro />);
    expect(wrapper).toMatchSnapshot();
  });
});
