import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {
  Text,
  View,
} from 'react-native';
import { Card, Grid, Col } from 'react-native-elements';
import { HomeInfo } from '../components/homeComponent/homeInfo';
import weathers from './data'

describe('home info component', () => {

    it('component rendered', () => {
      const wrapper = shallow(<HomeInfo weathers={weathers}/>);
        expect(wrapper).toMatchSnapshot();
    })
    it('component loading', () => {
      const wrapper = shallow(<HomeInfo weathers={{}}/>);
      console.log(wrapper.find(Text));
      expect(wrapper.find(Text)).toBeDefined();
    })
})
//  const wrapper = shallow (<HomeInfo />);
