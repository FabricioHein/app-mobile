import React from 'react';
import { View, Text } from 'react-native';
import style from '../../styles/style'
import Input from '../../components/input/input';
import InputPassword from '../../components/input/inputPassword';
import { Button, Card, Avatar, Surface} from 'react-native-paper';

const logo = {
    alignSelf: 'center'
}

const Login = () => {
    return (
        <View style={style.loginScreen}>
            <Card style={style.cardlogo}>
            <Avatar.Image style={logo} size={250} source={require('../../assets/logo.jpg')} />

            </Card>

            <Surface style={style.surfinput}>
              <Text > Digite o seu Login</Text>
                
                <Input
                    label={'Login Cliente'}
                    placeholder={'Digite o Login'}
                />
                <Text> Digite a senha</Text>

                <InputPassword
                    label={'Senha'}
                    placeholder={'Digite o Login'}
                />

            </Surface>
            <Card style={style.carbtn}>
            <Button style={style.button}> Acessar</Button>
            </Card>  







        </View>


    );
};



export default Login;