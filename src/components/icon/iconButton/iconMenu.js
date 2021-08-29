import * as React from 'react';
import { IconButton } from 'react-native-paper';

const IconMenu = (props) => (
  <IconButton
    icon={props.icon}
    size={props.size}
    color={props.color?  props.color : '#0382b3'}
    onPress={props.onPress? props.onPress : console.log('inserir funcao')}
  />
);

export default IconMenu;