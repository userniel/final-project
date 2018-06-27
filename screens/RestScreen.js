import React, { Component } from 'react';
import { AppRegistry, View, ImageBackground } from 'react-native';
import Header from '../src/components/Header';
import ForumList from '../src/components/ForumList';

class ForumScreen extends Component {
    static navigationOptions = {
        title: 'Forum',
    };

    render(){
        return(
            <ImageBackground
                source = {require('../img/rest.png')}
                style = {[{width: null, height: 650}, {marginTop: 25}]}
            />
            // <View style = {[{flex: 1}, {marginTop: 25}]}>
            //     <Header headerText = {'News'} />
            //     <ForumList />
            // </View>
        )
    }
}

export default ForumScreen;