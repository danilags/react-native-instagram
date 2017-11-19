import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

class CardHomeScreen extends React.PureComponent {
  render () {
    console.log("THIS PROPS.CardHomeScreen ", this.props);
    const { item } = this.props.property
    return (
      <View style={{ margin: 10 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 30, borderWidth: 0.5, marginRight: 10 }}
            source={{ uri: item.user.userpic_https_url }}
          />
          <Text>{ item.user.username }</Text>
        </View>
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center', margin: 10, padding: 10 }}>
            <Image
              style={{ width: 500, height: 300, margin: 5 }}
              source={{ uri: item.image_url }}
            />
            <Text>{ item.name } | { item.camera }</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'  }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text>{ item.rating }</Text>
            <Text>Rating</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidht: 1, alignItems: 'center' }}>
            <Text>{ item.votes_count }</Text>
            <Text>Votes</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text>{ item.iso }</Text>
            <Text>ISO</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text>{ item.times_viewed }</Text>
            <Text>Views</Text>
          </View>
        </View>

        <Text style={{ color: '#ccc', marginTop: 10 }}>{ item.created_at }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default CardHomeScreen;
