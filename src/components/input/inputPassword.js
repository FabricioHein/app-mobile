import * as React from 'react';
import { TextInput } from 'react-native-paper';
import style from '../../styles/style';

const InputPassword = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label="Senha"
      secureTextEntry
      right={<TextInput.Icon name="eye" />}
      onChangeText={text => setText(text)}
      style={style.input}
    />
  );
};

export default InputPassword;