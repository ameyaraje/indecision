import React from 'react';
import { shallow } from 'enzyme';

import Options from '../../components/Options';

test('should render Options component with no options passed', () => {
    const wrapper = shallow(<Options options={[]} />);

    expect(wrapper).toMatchSnapshot();
});


test('should render Options component with some options passed', () => {
    const wrapper = shallow(<Options options={["option 1", "option 2"]} />);

    expect(wrapper).toMatchSnapshot();
});