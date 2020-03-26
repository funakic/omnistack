import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import Routes from './src/routes';

// Diferenças html
// <div> <header> <footer>
// React Native basicamente utiliza <div>

export default function App() {
  return (
    <Routes />
  );
}

