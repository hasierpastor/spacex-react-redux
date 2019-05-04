import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Launch from '../../Components/Launch';

configure({ adapter: new Adapter() });

it('renders without crashing', function() {
  shallow(<Launch />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Launch />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
