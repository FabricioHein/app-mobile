import React, { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from '../../styles/style'
import { TextInput } from 'react-native-paper';
import { Button, Card, Surface, Title } from 'react-native-paper';


const Login = () => {

    const [user, setUser] = useState('Digite o Login');
    const [password, setPassword] = useState('**********');

    function getLogin(navigation) {
        if(user=='fabricio'&password==1234){
                       
            console.log('Acesso liberado')
            navigation.navigate('Details')

        }else{

            console.log('Erro')
        }
    }

    return (
        <View style={style.loginScreen}>
            <Card style={style.cardlogo}>
                <ImageBackground
                    source={require('../../assets/contabilidade-contsys.png')}
                    resizeMode="cover"
                    style={style.image}>
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
                    <TextInput
                        label="Email"
                        value={user}
                        onChangeText={user => setUser(user)}
                    />
                    <Text> Digite a senha</Text>
                    <TextInput
                        label="Senha"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />


                </Surface>
                <Card style={style.carbtn}>
                    <Button style={style.button}
                        onPress={getLogin}
                    >
                        Acessar
                    </Button>
                </Card>
            </Card>
        </View>


    );
};



export default Login;