import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Rocket from '../../Components/Rocket';

configure({ adapter: new Adapter() });

it('renders without crashing', function() {
  shallow(<Rocket />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Rocket />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
