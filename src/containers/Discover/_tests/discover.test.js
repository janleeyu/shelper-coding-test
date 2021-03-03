
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cookies from 'js-cookie';
import { shallow, mount, configure } from "enzyme"
import { fireEvent, render, } from '@testing-library/react'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// import Discover from '../index';
import Discover from '../index';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/discover",
      hash: '',
    })
}));

describe('Discover Component tests', () => {

    describe("render discover component", () => {
        const wrapper = shallow(<Discover />);
        it('should render component', () => {
            expect(wrapper).toBeTruthy();
        });

        it('should have initial state values', () => {
            expect(wrapper.state('newReleases')).toEqual([]);
            expect(wrapper.state('playlists')).toEqual([]);
            expect(wrapper.state('categories')).toEqual([]);
        });

        it('calls methods for retrieving data on componennt mount', () => {
            const instance = wrapper.instance();
            wrapper.instance().getNewReleases = jest.fn();
            wrapper.instance().getfeaturedPlaylists = jest.fn();
            wrapper.instance().getCategories = jest.fn();
            wrapper.update();
            instance.componentDidMount();

            expect(instance.getNewReleases).toHaveBeenCalled();
            expect(instance.getfeaturedPlaylists).toHaveBeenCalled();
            expect(instance.getCategories).toHaveBeenCalled();
        });
    });
});