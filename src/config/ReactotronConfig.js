import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux'

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();

 console.tron = Reactotron;
 export default Reactotron; 
