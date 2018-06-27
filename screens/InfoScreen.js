import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

class InfoScreen extends Component {
    static navigationOptions = {
        title: 'Info',
    };

    render() {
        const { container, user, circle, titleUp, titleDown, box } = styles;
        return(
            <ImageBackground source = {require('../img/user_bg.png')} style = {[{width: null, height: 650}, {marginTop: 25}]}/>
            // <View style = {{container}}>
            //     <View style = {[{flexDirection: 'row'}, {alignItems:  'center'}]}>
            //         <View style = {[user, {flex: 1}]}><Text style = {{fontSize: 12}}>環保小尖兵</Text></View>
            //         <View style = {[user, {flex: 1}]}><Text style = {{fontSize: 12}}>個人頭像</Text></View>
            //         <View style = {[user, {flex: 1}]}><Text style = {{fontSize: 12}}>10K/15K</Text></View>
            //     </View>
            //     <View style = {{flex: 1}}>
            //         <View><Text style = {titleDown}>帳號</Text></View>
            //         <View><Text style = {box}>alan_walkr</Text></View>
            //         <View><Text style = {titleDown}>電子信箱</Text></View>
            //         <View><Text style = {box}>xxxxxxxxx.gmail.com</Text></View>
            //         <View><Text style = {titleDown}>獲得能量次數</Text></View>
            //         <View><Text style = {box}>500</Text></View>
            //         <View><Text style = {titleDown}>活動參與次數</Text></View>
            //         <View><Text style = {box}>10</Text></View>
            //         <View><Text style = {titleDown}>最長持續天數</Text></View>
            //         <View><Text style = {box}>100</Text></View>
            //     </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    user: {
        backgroundColor: 'lightgrey',
        borderColor: '#ddd',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    circle: {
        backgroundColor: 'lightgrey',
        borderColor: '#ddd',
        width: 80,
        height: 80,
        borderRadius: 40,
        textAlign: 'center',
    },
    titleUp: {
        fontSize: 15,
        textAlign: 'center',
    },
    titleDown: {
        padding: 10,
        fontSize: 10,
        textAlign: 'left',
    },
    box: {
        backgroundColor: 'lightgrey',
        alignItems: 'flex-start',
        marginLeft: 10,
        fontSize: 12,
    },
})

export default InfoScreen;