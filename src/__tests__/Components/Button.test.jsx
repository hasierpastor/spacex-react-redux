import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../Components/Button';

configure({ adapter: new Adapter() });

it('renders without crashing', function() {
  shallow(<Button />);
});
