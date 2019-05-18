import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform} from 'react-native'

class Inicio extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Tela de Inicio...</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        // borderBottomWidth: 1,
        // borderColor: '#EEE',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#CCC'
    },
    texto: {
        // color: '#000',
        fontSize: 30,
    }
})

export default Inicio