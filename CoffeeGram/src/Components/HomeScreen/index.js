import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import { getImage } from '../../Actions/photosAction';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      propertys: []
    }
  }

  componentDidMount() {
    this.props.getImage()
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
        <ScrollView>
          {
            this.props.dataImage.photos.map((a, index) => (
              <View key={index} style={{ margin: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                  <Image
                    style={{ width: 70, height: 70, borderRadius: 30, borderWidth: 0.5, marginRight: 10 }}
                    source={{ uri: a.user.userpic_https_url }}
                  />
                  <Text>{ a.user.username }</Text>
                </View>
                <View style={{ flex: 1, alignItems:'center', justifyContent:'center', margin: 10 }}>
                    <Image
                      style={{ width: 500, height: 300 }}
                      source={{ uri: a.image_url }}
                    />
                    <Text>{ a.name }</Text>

                </View>
              </View>
            ))
          }
        </ScrollView>
      }

      </View>
    )
  }
}

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
