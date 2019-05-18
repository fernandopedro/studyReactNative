import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import Cabecalho from './src/components/cabecalho'
import Login from './src/components/login'
import MenuNavigator from './src/navegador'
import Inicio from './src/telas/inicio'

export default class App extends Component{
	render() {
		return (
			<View style={styles.container}>
				<MenuNavigator />
				{/* <Cabecalho /> */}
				{/* <Login />  */}
				{/* <Inicio /> */}
			</View>
		)
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})