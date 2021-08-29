import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from '../../styles/style'
import Input from '../../components/input/input';
import InputPassword from '../../components/input/inputPassword';
import { Button, Card, Avatar, Surface, Title } from 'react-native-paper';

const logo = {
    alignSelf: 'center'
}

const Login = () => {
    return (
        <View style={style.loginScreen}>
            <Card style={style.cardlogo}>
                <ImageBackground source={require('../../assets/contabilidade-contsys.png')} resizeMode="cover" style={style.image}>

                </ImageBackground>

            </Card>
            <Card style={style.cardlogo1}>
                <Image
                    style={style.logoImage}
                    source={require('../../assets/logo.png')}
                />
                <Title style={style.title}>Empresa Especialista em
                    Corretores de Seguros e Advogados.</Title>

            </Card>
            <Card style={style.cardlogo2}>
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
            </Card>
        </View>


    );
};



export default Login;