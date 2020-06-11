import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
// Importar sempre após o Reactotron
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
