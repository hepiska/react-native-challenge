import React from 'react';
import { shallow } from 'enzyme';
import {fetchWeatherDone, fetchWeather } from '../actions';

describe('actions', () => {
  it('fetchWeatherDone', () => {
    const weathers = {username:'lala',password:'lalala'};
    const expected = {
      type:'FETCH_WEATHER',
      payload:weathers,
    }
    expect(fetchWeatherDone(weathers)).toEqual(expected);
  })
})
