import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Platform,
    Text
} from 'react-native'

class cabecalho extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>Aprendendo...</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#EEE',
        // textAlignVertical: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-evenly'
    },
    title: {
        color: '#000',
        height: 40,
        fontSize: 30,
        // textAlignVertical: 'center'
    }
})

export default cabecalho