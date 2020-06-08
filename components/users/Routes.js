import React from 'react';
import Blogs from './Blogs';
import MyInvestments from './MyInvestments';
import Edit from './Edit';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Stack = createStackNavigator({
    Invest: {
        screen: Blogs,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments",
            headerShown: false
            
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions: () => ({
            headerTitleAlign: "center", 
            headerTitle:"Invest",
            headerShown: false
        })
    }
})

const BottomTab = createBottomTabNavigator({
    Invest: {
        screen: Stack,
        navigationOptions: () => ({
        tabBarOptions: {
            activeTintColor: '#FF0000', // active icon color
            inactiveTintColor: '#929292',  // inactive icon color
            style: {
                backgroundColor: '#fff', // TabBar background
                height: 50,
            }
        },
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="money"
                color={tintColor}
                size={30}
            />
        )
    })
    },
    Investments: {
        screen: MyInvestments,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: '#FF0000', // active icon color
                inactiveTintColor: '#929292',  // inactive icon color
                style: {
                    backgroundColor: '#fff', // TabBar background
                    height: 50,

                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="line-chart"
                    color={tintColor}
                    size={30}
                />
            )
        })
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)