import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'

import Cabecalho from './src/components/cabecalho'
import MenuNavigator from './src/navegador'

export default class App extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Cabecalho />
				<MenuNavigator />
			</View>
		)
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})