import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';


//configure google GoogleSignin
GoogleSignin.configure({webClientId: '1012313193866-4uolh7jdp6ttpg79pit9ui0j2daunqik.apps.googleusercontent.com'});

export default class Login extends React.Component {
  state = {userInfo: ''};

  componentDidUpdate()
  {
    if(this.state.userInfo != '')
      this.props.navigation.navigate("ChatList", { userInfo: this.state.userInfo });
  }

	async loginWithGoogle()
	{
		try
		{
	    await GoogleSignin.hasPlayServices();
	    const userInfo = await GoogleSignin.signIn();
	    this.setState({ userInfo });

	  }
		catch(error)
		{
			console.log("Error: " + error);
	  }
	}

	loginWithFacebook()
	{
		console.log("Login With Facebook");
	}

	render()
	{
		return(
			<View style={style.container}>
				<Text style={style.logoText}>CHATTY</Text>
				<Text style={style.subText}>Please login to continue</Text>
				<View style={style.btnHolder}>
					<TouchableOpacity style={style.loginBtnGoogle} activeOpacity={0.6} onPress={() => this.loginWithGoogle()}>
							<Text style={style.btnText}>Login With Google</Text>
					</TouchableOpacity>
				</View>
				<View style={style.btnHolder}>
					<TouchableOpacity style={style.loginBtnFacebook} activeOpacity={0.6} onPress={() => this.loginWithFacebook()}>
							<Text style={style.btnText}>Login With Facebook</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
	},
	logoText: {
		fontSize: 50,
		color: '#FF655B',
		textAlign: 'center'
	},
	subText: {
		fontSize: 20,
		color: '#f5cb42',
		textAlign: 'center',
		marginBottom: 40
	},
	btnHolder: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 10
	},
	loginBtnGoogle: {
		backgroundColor: '#4285F4',
		justifyContent: 'center',
		paddingVertical: 15,
		paddingHorizontal: 50,
		borderRadius: 50
	},
	loginBtnFacebook: {
		backgroundColor: '#4267B2',
		justifyContent: 'center',
		paddingVertical: 15,
		paddingHorizontal: 50,
		borderRadius: 50
	},
	btnText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
});
