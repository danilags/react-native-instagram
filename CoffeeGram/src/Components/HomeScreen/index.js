import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { getImage } from '../../Actions/photosAction';

import CardHomeScreen from '../Assets/CardHomeScreen';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      headerTitle: 'Coffeegram',
      headerTitleStyle: {
        alignSelf: 'center',
				color: 'black',
				textAlign:'center',
				fontWeight: '500'
			},
      headerLeft: <TouchableHighlight
        style={{ marginLeft: 10 }}
        onPress={ () => alert('This is form for HELP perpose!')
      }><Text style={{ color: '#000', fontSize: 12 }}>HELP</Text></TouchableHighlight>,
      headerRight: <TouchableHighlight
        style={{ marginRight: 10 }}
        onPress={ () => alert('AAAAA OKEEE')
      }><Text style={{ color: '#000', fontSize: 12 }}>Messages</Text></TouchableHighlight>,
    }
  };

  componentDidMount() {
    this.props.getImage()
  }

  _afterRefresh() {
    this.setState({refreshing: false})
    this.props.getImage()
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this._afterRefresh()
  }

  _renderItem(item) {
    return (
      <CardHomeScreen
        property={item}
      />
    )
  }


  render () {
    console.log("HELLLOOOOO", this.props);
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
      }}>

      <FlatList
        data={this.props.dataImage.photos}
        renderItem={(item) => this._renderItem(item)}
      />

      <View style={styles.footerWrap}>
          <View style={{ flex: 1, justifyContent: 'center', borderColor: '#ccc', backgroudColor: '#ccc', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => { alert(true) }}

            >
              <Text style={{ color: '#000', fontSize: 13 }}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', width: '50%', borderColor: '#ccc', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => alert()}

            >
              <Text style={{ color: '#000', fontSize: 13 }}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', width: '50%', borderColor: '#ccc', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => alert('Hello')}

            ><Text style={{ color: '#000', fontSize: 13 }}>Notification</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', width: '50%', borderColor: '#ccc', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => alert('Hello')}

            ><Text style={{ color: '#000', fontSize: 13 }}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerWrap: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F5F5F5',
    width: '100%',
    color: '#fff',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});


const mapStateToProps = state => {
  console.log("Ini state yang di HomeScreen ", state.dataImage);
  return {
    dataImage: state.dataImage,
  }
}

const mapDispatchToProps = dispatch => ({
  getImage: () => dispatch(getImage()),
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
