import React from 'react';
import { shallow } from 'enzyme';

import Option from '../../components/Option';

test('should render Option component', () => {
    const wrapper = shallow(<Option />);

    expect(wrapper).toMatchSnapshot();
});