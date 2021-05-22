import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {enableScreens} from 'react-native-screens'
import { useState } from 'react';
import Navigation from './Navigasi/NavugasiApp';
import categoriReducer from './store/reducer/categori';
import recepReducer from './store/reducer/recep';
import favoriteReducer from './store/reducer/favorites';
import authReducer from './store/reducer/auth';

//redux
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'



const rootReducer = combineReducers ({
  auth: authReducer,
  categori: categoriReducer,
  recep: recepReducer,
  favorites: favoriteReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

enableScreens()
export default function App() {
  return( 
    <Provider store = {store}>
      <Navigation/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
