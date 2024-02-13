/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigator';
import AppContextProvider from './src/stores/app-context';
// import {ClipboardModuleView} from 'react-native-clipboard-module';
// import ChangeAppIcon from './ChangeAppIcon';

function App(): JSX.Element {
  console.log('Main App Screen Renders');
  // <ChangeAppIcon />
  // <ClipboardModuleView />
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  );
}

export default App;
