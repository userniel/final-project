import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ForumScreen from '../screens/RestScreen'
import InfoScreen from '../screens/InfoScreen';
import DiningScreen from '../screens/MainScreen';

const InfoStack = createStackNavigator(
    {
        InfoScreen: {
            screen: InfoScreen,
        }
    },
    { headerMode: 'none' }
);


const DiningStack = createStackNavigator(
    {
        DiningScreen: {
            screen: DiningScreen,
        }
    },
    { headerMode: 'none' }
);

const ForumStack = createStackNavigator(
    {
        ForumScreen: {
            screen: ForumScreen,
        }
    },
    { headerMode: 'none' }
);


export const TabRouter = createBottomTabNavigator(
    {
        Info: {
            screen: InfoStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source = {require('../img/user.png')}
                        style = {[{tintColor: tintColor}, {width: 20, height: 20}]}
                    />
                )
            }
        },
        Main: {
            screen: DiningStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source = {require('../img/home.png')}
                        style = {[{tintColor: tintColor}, {width: 25, height: 20}]}
                    />
                )
            }
        },
        Resturant: {
            screen: ForumStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source = {require('../img/resturant.png')}
                        style = {[{tintColor: tintColor}, {width: 20, height: 20}]}
                    />
                )
            }
        }
    },
    {
        animationEnabled: true,
    },
);
