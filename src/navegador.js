import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Inicio from './telas/inicio'
import Cadastrar from './telas/cadastro'

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
    Cadastrar: {
        name: 'Cadastrar',
        screen: Cadastrar,
        navigationOptions: {
            title: 'Cadastrar',
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