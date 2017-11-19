import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class FooterNav extends React.PureComponent {
  render () {
    return (
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

export default FooterNav;
