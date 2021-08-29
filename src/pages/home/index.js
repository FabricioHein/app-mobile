import React from 'react';
import { View, Text } from 'react-native';
import IconMenu from '../../components/icon/iconButton/iconMenu';
import style from '../../styles/style'
import { Surface, Divider } from 'react-native-paper';
import { Grid, Col} from 'react-native-easy-grid';

const Home = () => {
  return (
    <View>
    <Grid >
    <Col>
    <View style={style.contener}>
        <Divider style={style.divider}>
          <Surface style={style.surface}>
          <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'file-document'} >
            </IconMenu>
          </Surface>
          <Text style={style.text}>Imposto Renda</Text>

          <Surface style={style.surface}>
          <Text style={style.text}>Datas</Text>

            <IconMenu size={80} icon={'calendar'} />

          </Surface>

          <Surface style={style.surface}>
            <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'folder'} />

          </Surface>
          <Surface style={style.surface}>
            <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'folder'} />

          </Surface>
        </Divider>

      </View>
    </Col>
    <Col>
    <View style={style.contener}>
        <Divider style={style.divider}>
          <Surface style={style.surface}>
          <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'file-document'} >
            </IconMenu>
          </Surface>
          <Text style={style.text}>Imposto Renda</Text>

          <Surface style={style.surface}>
          <Text style={style.text}>Datas</Text>

            <IconMenu size={80} icon={'calendar'} />

          </Surface>

          <Surface style={style.surface}>
            <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'folder'} />

          </Surface>
          <Surface style={style.surface}>
            <Text style={style.text}>Imposto Renda</Text>

            <IconMenu size={80} icon={'folder'} />

          </Surface>
        </Divider>

      </View>

    </Col>
  </Grid>
  </View>
      
    
  );
};



export default Home;