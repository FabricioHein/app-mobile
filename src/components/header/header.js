import { blue } from 'color-name';
import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';

const Header = (props) => {
  const _goBack = () => console.log('Searching');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header >
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content  style={{alignContent: 'flex-start'}} title={props.title} subtitle={props.subtitle}/>
        
      {/* <Appbar.Action icon='magnify' onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon='dots-vertical' onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default Header;