import React from 'react';
import { shallow } from 'enzyme';

import Action from '../../components/Action';

test('should render Action component', () => {
    const wrapper = shallow(<Action />);

    expect(wrapper).toMatchSnapshot();
});