import React from 'react';
import { Header } from 'react-native-elements';
export default function Appbar() {
  return (
    <Header
      backgroundColor={'#3D6089'}
      centerComponent={{
        text: 'My Weather App',
        style: { color: '#fff', fontSize: 20 },
      }}
    />
  );
}
