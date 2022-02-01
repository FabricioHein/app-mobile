import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store'
import App from './src/App';
import Rota from './src/routes/routes';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0382b3',

  }
};

export default function Main() {
  return (
    <StoreProvider  store={store}>
      <PaperProvider theme={theme} >
         <Rota />
      </PaperProvider>      
    </StoreProvider>
  );
}