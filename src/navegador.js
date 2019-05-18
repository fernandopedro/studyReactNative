import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Inicio from './telas/inicio'
import Login from './components/login'

const MenuRoute = {
    Inicio: {
        name: 'Inicio',
        screen: Inicio,
        navigationOptions: {
            title: 'Início',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />,
            tabBarOptions: {
                style: {
                    // backgroundColor: '#EEE'
                }
            }
        }
    },
    Adicionar: {
        name: 'Adicionar',
        screen: Login,
        navigationOptions: {
            title: 'Adicionar',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />,
            tabBarOptions: {
                style:{
                    // backgroundColor: '#EEE'
                }
            }
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Inicio',
    tabBarOptions: {
        showLabel: true,
        // backgroundColor: '#EEE'
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoute, MenuConfig)
export default MenuNavigator