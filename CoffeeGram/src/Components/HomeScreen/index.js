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
} from 'react-native';

import { getImage } from '../../Actions/photosAction';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      propertys: []
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


  render () {
    console.log("HELLLOOOOO");
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
      }}>
      {
        this.props.dataImage.photos.length == 0 ? <Text>Loading ...</Text> :
        <ScrollView
          refreshControl={
             <RefreshControl
               refreshing={this.state.refreshing}
               onRefresh={this._onRefresh.bind(this)}
             />
          }
        >
          {
            this.props.dataImage.photos.map((a, index) => (
              <View key={index} style={{ margin: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                  <Image
                    style={{ width: 70, height: 70, borderRadius: 30, borderWidth: 0.5, marginRight: 10 }}
                    source={{ uri: a.user.userpic_https_url }}
                  />
                  <Text>{ a.user.username }</Text>
                </View>
                <View style={{ flex: 1, alignItems:'center', justifyContent:'center', margin: 10, padding: 10 }}>
                    <Image
                      style={{ width: 500, height: 300, margin: 5 }}
                      source={{ uri: a.image_url }}
                    />
                    <Text>{ a.name } | { a.camera }</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'  }}>
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text>{ a.rating }</Text>
                    <Text>Rating</Text>
                  </View>
                  <View style={{ flexDirection: 'column', borderRightWidht: 1, alignItems: 'center' }}>
                    <Text>{ a.votes_count }</Text>
                    <Text>Votes</Text>
                  </View>
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text>{ a.iso }</Text>
                    <Text>ISO</Text>
                  </View>
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text>{ a.times_viewed }</Text>
                    <Text>Views</Text>
                  </View>
                </View>

                <Text style={{ color: '#ccc', marginTop: 10 }}>{ a.created_at }</Text>
              </View>
            ))
          }
        </ScrollView>
      }

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
