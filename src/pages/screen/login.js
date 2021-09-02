import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from '../../styles/style'
import { TextInput } from 'react-native-paper';
import { Button, Card, Surface, Title } from 'react-native-paper';


const Login = ({ navigation }) => {    

    const [user, setUser] = useState('fabricio');
    const [password, setPassword] = useState('1234');
    const [logado, setLogado] = useState(false);

    useEffect(()=>{
        setLogado(true)
    },[logado]
    )

        
    function getLogin() {

        if(user=='fabricio'&password==1234){    
           
            setLogado(true)

            navigation.navigate('Home - Contsys')           

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
                    <TextInput
                        label="Senha"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
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