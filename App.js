import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {enableScreens} from 'react-native-screens'
import { useState } from 'react';
import Navigation from './Navigasi/NavugasiApp';


enableScreens()


export default function App() {
  return <Navigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
