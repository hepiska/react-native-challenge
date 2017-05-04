import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { SearchBox, HomeInfo } from '../components/homeComponent';
import { Home } from '../components/home';

describe ('home test', () => {
  const shallowrapper = shallow(<Home navigation={{ navigate: () => {} }} />);
  it('rendered', () => {
    expect(shallowrapper).toMatchSnapshot();
  });
  it('rendered', () => {
    shallowrapper.find(Button).simulate('press');
  });
});
