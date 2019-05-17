import React, {Component} from 'react'
import { View } from 'react-native'
import Cabecalho from './src/components/cabecalho'
import Login from './src/components/login'

export default class App extends Component{
	render() {
		return (
			<View>
				<Cabecalho />
				<Login /> 
			</View>
		)
}	
}
