import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../Components/Loading';

configure({ adapter: new Adapter() });

it('renders without crashing', function() {
  shallow(<Loading />);
});
