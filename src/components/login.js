import React, { Component } from 'react'
import{
    Text,
    View,
    StyleSheet
} from 'react-native'

class login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Usuário</Text>
                <Text>Senha</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        color: '#BBB'
    }
})

export default login