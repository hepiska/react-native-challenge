import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store'
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import {
  Text,
  View,
} from 'react-native';
import SearchBox, { SearchBox as SearchBox1 } from '../components/homeComponent/searchBox';
import { SearchBar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';


describe('searchBox component', () => {
  const searchcomp = shallow(<SearchBox1 />);
  //const searchBoxMount = mount(<Provider store={store}><SearchBox1 /></Provider>)
  it('rendered', () => {
    expect(searchcomp).toMatchSnapshot();
  });
  it('search on change', () => {
    searchcomp.find(SearchBar).simulate('ChangeText', 'jakarta' );
    expect(searchcomp.state('text')).toEqual('jakarta');
  });
  it('search button click', () => {
    const press = sinon.spy();
    // searchBoxMount.find(Button).toHaveLength(1);
    //console.log('---------- render',searchcomp.find(Button).simulate('Press'))
    // console.log('---------- render',searchBoxMount.find(Button));
    //expect(searchcomp.state('text')).toEqual('');
  })
})
