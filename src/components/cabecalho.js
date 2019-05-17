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
                    <Text style={styles.title}>Fernando Pedro</Text>
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
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: 'row',
    },
    title: {
        color: '#000',
        height: 30,
        fontSize: 30
    }
})

export default cabecalho