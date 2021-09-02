import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './pages/home'
import Login from './pages/screen/login';
import Rota from './routes/routes';
import styles from './styles/style';

function App() {
  

  return (
    <SafeAreaView style={styles.contener}>
      {/* <Home/>  */}
     
     <Login/>
    </SafeAreaView>

  );
}

export default App;