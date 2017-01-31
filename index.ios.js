// Index.ios.js - IOS
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (

  (
    // is style flex: 1 necessary here?
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
);

AppRegistry.registerComponent('albums', () => App);
