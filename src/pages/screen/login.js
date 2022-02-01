import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import style from '../../styles/style'
import { TextInput } from 'react-native-paper';
import { Button, Card, Surface, Title } from 'react-native-paper';
import Api from '../../service/Api'


const Login = ({ navigation }) => {    

    const [user, setUser] = useState('admin@admin.com.br');
    const [password, setPassword] = useState('987654321@admin.com.br');
    const [logado, setLogado] = useState(false);
    const PageHome = navigation.navigate('Contsys')

    useEffect(()=>{
        setLogado(true)
        
    },[]
    )

    const json = JSON.stringify({ email: user, password: password});
    const res = Api.post('api/auth/sign_in', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
            })
            .then(function (res) {

                const acessToken = res.headers['access-token']
                const client = res.headers['client']

                console.log(acessToken, client);
                setLogado(true);
                PageHome
                
                 
              })
              .catch(function (error) {
                console.log(error);
              })

   
    
   

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
                        // right={<TextInput.Icon name="eye" />}
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />


                </Surface>
                <Card style={style.carbtn}>
                    <Button style={style.button}
                        onPress={()=> res}
                    >
                        Login
                    </Button>
                </Card>
            </Card>
        </View>


    );
};

export default Login;