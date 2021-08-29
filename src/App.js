import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './pages/home'
import Login from './pages/screen/login';
import Rota from './routes/routes';


function App() {
  

  return (
    <SafeAreaView>
      {/* <Home/>  */}
     
     <Login/>
     {/* <Rota></Rota> */}
    </SafeAreaView>

  );
}

export default App;