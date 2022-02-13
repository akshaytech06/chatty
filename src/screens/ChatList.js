import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class ChatList extends React.Component {
  render()
  {
    return(
      <View>
        <Text>List {JSON.stringify(this.props.route.params.userInfo.user)}</Text>
      </View>
    )
  }
}
