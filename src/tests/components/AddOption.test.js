import React from 'react';
import { shallow } from 'enzyme';

import AddOption from '../../components/AddOption';

test('should render AddOption component', () => {
    const wrapper = shallow(<AddOption />);

    expect(wrapper).toMatchSnapshot();
});