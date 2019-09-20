import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './src/components/Login'
import Profile from './src/containers/Profile'
import ProfileHeader from './src/containers/ProfileHeader'
import {connect} from 'react-redux';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
        header: null,
    }),
},
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            header : <ProfileHeader navigation={navigation}/>,
        }),
      }
});

const StackContainer= createAppContainer(AppNavigator);

class AppStack extends Component {
  render() {
    return(
      <SafeAreaView style={{flex:1}}>
        <StackContainer/>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  SignInReducer: state.SignInReducer
})

export default connect(mapStateToProps)(AppStack)
