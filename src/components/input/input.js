import * as React from 'react';
import { TextInput } from 'react-native-paper';
import style from '../../styles/style';


const Input = (props) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      mode={props.mode}
      label={props.label}
      placeholder={props.placeholder}
      onChangeText={text => setText(text)}
      style={style.input}

    />
  );
};

export default Input;