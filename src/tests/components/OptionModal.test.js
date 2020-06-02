import React from 'react';
import { shallow } from 'enzyme';

import OptionModal from '../../components/OptionModal';

test('should render OptionModal component', () => {
    const wrapper = shallow(<OptionModal />);

    expect(wrapper).toMatchSnapshot();
});