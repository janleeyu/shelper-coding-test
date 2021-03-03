
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cookies from 'js-cookie';
import { shallow, mount, configure } from "enzyme"
import { fireEvent, render, } from '@testing-library/react'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import Login from '../index';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/example/path",
      hash: '',
    })
}));

describe('Login Component tests', () => {
    describe("render login component", () => {
        const wrapper = render(<Login />);
        const connectButton = wrapper.queryAllByAltText('CONNECT WITH SPOTIFY');

        it('should render component', () => {
            expect(wrapper).toBeTruthy();
        });

        it('should have spotify connect button', () => {
            expect(connectButton).toBeTruthy();
        });

        it('should call onClick method upon clicking spotify connect button', () => {
            const component = shallow(<Login />);
            
            component.find('button').simulate('click');
        });
    });
});