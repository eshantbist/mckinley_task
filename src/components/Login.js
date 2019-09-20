import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoginForm from '../containers/LoginForm';

// create a component
class Login extends Component {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require('../Images/netflix-logo.png')} />
            </View>
            <View style={styles.formContainer}>
                <LoginForm navigation={this.props.navigation}/>
            </View>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: '50%',
        height: '50%'
    }
});

//make this component available to the app
export default Login;