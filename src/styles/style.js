import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    alignSelf: 'center',
    alignContent: 'center',
    width: '50%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#ffff'
 
  },
  surface: {
    padding: 8,
    height: 160,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 50,
  },
  text: {
    color: 'black',
    alignContent: 'center',
    textAlign: 'center'
  },
  divider: {
    padding: 0,
    alignItems: 'center'

  },
  paper: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  dividerCol: {
    padding: 0,
    alignItems: 'center'

  },
  cardlogo: {
    paddingTop: 120,
    height: '60%',
    backgroundColor: '#4791db',
    elevation: 0

  },
  carbtn:{
    paddingTop: 20,
    height: '20%',
    backgroundColor: '#4791db',
    elevation: 0

  },
  input: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  surfinput: {
    padding: 10,
    alignSelf: 'center',
    opacity: 0.6,
    width: '80%',
    borderRadius: 5,

  },
  logoImage: {
    padding: 1,
    borderRadius: 10,
    alignContent: 'center',
    position: 'absolute',
    height: '80%',
    width: '100%',
    backgroundColor: '#ffff'
  },

  loginScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#4791db'
  },

})

export default styles

