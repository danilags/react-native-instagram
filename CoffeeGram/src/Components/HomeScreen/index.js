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
  ActivityIndicator,
} from 'react-native';

import { getImage } from '../../Actions/photosAction';

import CardHomeScreen from '../Assets/CardHomeScreen';
import FooterNav from '../Assets/FooterNav';

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
    const { page } = this.state;
    this.props.getImage(page)
  }

  _afterRefresh() {
    this.setState({refreshing: false})

  }

  handleRefresh = () => {
    this.setState({refreshing: true}, () => {
      this.props.getImage()
    })
    this._afterRefresh()
  }

  _renderItem(item) {
    return (
      <CardHomeScreen
        property={item}
      />
    )
  }

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.props.getImage(page)
    })
  }

  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    )
  }


  render () {
    // console.log("HELLLOOOOO", this.props);
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
      }}>

        <FlatList
          data={this.props.dataImage.photos}
          renderItem={(item) => this._renderItem(item)}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          ListFooterComponent={this.renderFooter}
          onEndThreshold={0}
        />

        <FooterNav />
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
  getImage: (page) => dispatch(getImage(page)),
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
