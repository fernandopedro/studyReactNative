import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Inicio from './telas/inicio'
import Login from './telas/login'

const MenuRoute = {
    Inicio: {
        name: 'Inicio',
        screen: Inicio,
        navigationOptions: {
            title: 'Início',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Adicionar: {
        name: 'Adicionar',
        screen: Login,
        navigationOptions: {
            title: 'Adicionar',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Inicio',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoute, MenuConfig)
export default MenuNavigator