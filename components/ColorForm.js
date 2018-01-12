import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

export default class ColorForm extends Component {
    constructor(){
        super()
        this.state = {
            textColor: ''
        }

        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.onNewColor(this.state.textColor.toLowerCase())
        this.setState({textColor: ''});
    }

    render(){
        const {navigate} = this.props.navigation;
        const uri = 'https://www.w3schools.com/colors/colors_names.asp';
        return(
            <View style={styles.container} >
                <TextInput style={styles.textInput}
                           placeholder="Enter a color"
                           onChangeText = {(textColor) => this.setState({textColor})}
                           value={this.state.textColor}
                />
                <Text style={styles.button}
                      onPress={this.submit}>Add</Text>
                <Text style={styles.button}
                      onPress={() => navigate('Web', {uri})}>Info</Text>
            </View>
        )
    }
}


ColorForm.propTypes = {
    onNewColor: PropTypes.func.isRequired
}


const styles = StyleSheet.create ({
    container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        height: 70,
        paddingTop:20
    },

    textInput: {
        flex:1,
        margin:5,
        padding:5,
        borderWidth:1,
        fontSize:20,
        borderRadius:3,
        backgroundColor: 'snow'
    },

    button: {
        backgroundColor: 'black',
        margin:5,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        color: 'white',
        fontSize:20
    }
});