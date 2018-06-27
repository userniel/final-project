import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

class DiningScreen extends Component{
    static navigationOptions = {
        title: 'Dining',
    };

    render() {
        const { container, box } = styles;
        return (
            <ImageBackground source={require('../img/main_bg.png')} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../img/word1.png')} style={styles.word1}/>
                </View>
  
                <ImageBackground source={require('../img/myPlante_img.png')} style={{flex:1,height:148,width:112,marginTop:150,justifyContent:'center',alignItems:'center'}} >
                    <Image source={require('../img/word2.png')} style={styles.word2}/>
                </ImageBackground >
  
                {/* <View style={{justifyContent:'center',flexDirection:'row',alignItems:'flex-end'}}>
                    <Image source={require('../img/user.png')} style={styles.icon}/>
                    <Image source={require('../img/resturant.png')} style={styles.icon}/>
                    <Image source={require('../img/home.png')} style={styles.icon_home}/>
                    <Image source={require('../img/mail.png')} style={styles.icon}/>
                    <Image source={require('../img/more.png')} style={styles.icon}/>
                </View> */}
            </ImageBackground >
            // <View style = {container}>
            //     <Text style = {box}>善食堂</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {box}>‧‧‧‧‧‧</Text>
            //     <Text style = {{fontSize: 15}}>MORE</Text>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        height:50,
        width:50,
        margin:8,
    },
    icon_home:{
        height:60,
        width:100,
        marginTop:145
    },
    word1:{
        height:60,
        width:120,
    },
    word2:{
        height:25,
        width:100,
        marginTop:150
    }
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    // },
    // box: {
    //     width: 300,
    //     margin: 9,
    //     padding: 10,
    //     backgroundColor: 'lightgrey',
    //     fontSize: 15,
    //     textAlign: 'left',
    // }
})

export default DiningScreen;