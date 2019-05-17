import React, { Component } from 'react'
import{
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    View,
    StyleSheet
} from 'react-native'

class login extends Component{
    _onPressButton(){
        Alert.alert('Logando...')
    }
    render(){
        return(
            
                <View style={styles.container}>
                    <View style={styles.agrupa}>
                        <Text style={styles.text}>Usuário</Text>
                        <TextInput style={styles.inputText}
                            placeholder="Informe o usuário"
                        />
                    </View>
                    <View style={styles.agrupa}>
                        <Text style={styles.text}>Senha</Text>
                        <TextInput style={styles.inputText}
                            placeholder="Informe a senha"
                        />
                    </View>
                    <View style={styles.agrupa}>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.buttonInvert}>
                                <Text style={styles.buttonTextInvert}>Cadastrar</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Logar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        color: '#000'
    },
    text: {
        // flexDirection: 'row',
        color: '#000',
        height: 30,
        width: 120,
        fontSize: 30,
        marginTop: 10
    },
    inputText:{
        height: 30,
        width: 170,
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 4,
        backgroundColor: '#EEE'
    },
    agrupa:{
        flex: 1,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        borderRadius: 4,
        height: 40,
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    },
    buttonInvert: {
        borderRadius: 4,
        height: 40,
        backgroundColor: '#EEE'
    },
    buttonTextInvert: {
        padding: 10,
        color: '#2196F3'
    }
})

export default login