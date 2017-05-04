import React from 'react';
import {fetchWeatherDone, fetchWeather } from '../actions';
import WeatherReducer  from '../reducers/weatherReducer';
import data from './data';

describe('reducers', ()=>{
  const initState = []
   it('fetch data',()=>{
     let newstate=WeatherReducer(initState,fetchWeatherDone(data))
     expect(newstate).toEqual(data);
   })
})
