import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Login from '../pages/screen/login';
import Doc from '../pages/modules/documents';


const Stack = createNativeStackNavigator();


function Rota() {

  function CustomNavigationBar({ navigation, back }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="My awesome app" />
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }>
            <Menu.Item onPress={() => { console.log('Option 1 was pressed') }} title="Option 1" />
            <Menu.Item onPress={() => { console.log('Option 2 was pressed') }} title="Option 2" />
            <Menu.Item onPress={() => { console.log('Option 3 was pressed') }} title="Option 3" disabled />
          </Menu>
        ) : null}
      </Appbar.Header>
    );
  }

  function Logout() {

    return (<NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>)

  }
  function Login(params) {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Doc" component={Doc} />

        </Stack.Navigator>
      </NavigationContainer>

    )

  }



  return (
    {Logout()}
   
  );
}

export default Rota;