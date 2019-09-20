import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {logOut} from '../actions'

class ProfileHeader extends Component{
  logOut = () => {
    AsyncStorage.setItem('user','false');
    this.props.logOut()
    this.props.navigation.navigate('Home');
    Alert.alert(
    '',
    "Logged Out Successfully"
    )
  };

  render(){
    return(
      <View style={{backgroundColor:'#e6e6e6',padding:10,flexDirection:'row-reverse'}}>
         <TouchableOpacity onPress={()=>this.logOut()}>
           <FontAwesome size={20} name='sign-out'/>
         </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({logOut},dispatch)
}

export default connect(null,mapDispatchToProps)(ProfileHeader);
