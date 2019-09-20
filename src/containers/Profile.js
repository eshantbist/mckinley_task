import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {fetchList} from '../actions';
import {bindActionCreators} from 'redux';

class Profile extends Component {

  state={
    user:null
  }

  componentDidMount=async()=>{
      this.props.fetchList();
      const data = await AsyncStorage.getItem('data');
  }

  componentWillReceiveProps=async(nextProps)=>{
    const data = await AsyncStorage.getItem('data');
    let user = nextProps.UserListReducer.userList.find(item=>{
      return item.email===data
    })
    this.setState({user})
    console.log(user);

  }
  render() {
    if(this.state.user==null){
      return null
    }
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: `${this.state.user.avatar}`}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user.first_name} {this.state.user.last_name}</Text>
              <Text style={styles.info}>Nick Name</Text>
              <Text style={styles.description}>A short description about the user. This is the profile page. User can logout using the button on the top right corner of the screen.</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
});

const mapStateToProps=(state)=>{
  return {UserListReducer:state.UserListReducer};
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({fetchList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);