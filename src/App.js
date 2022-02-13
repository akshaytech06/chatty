import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import ChatList from './screens/ChatList';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {

	render()
	{
		return(
			<NavigationContainer>
	      <Stack.Navigator screenOptions={{headerShown: false}}>
	        <Stack.Screen name="Login" component={Login} navigation={Stack} />
	        <Stack.Screen name="ChatList" component={ChatList} navigation={Stack} />
	      </Stack.Navigator>
	    </NavigationContainer>
		)
	}
}
