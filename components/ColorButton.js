import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const ColorButton = ({backgroundColor, onSelect=f=>f}) => (
    <TouchableHighlight style={styles.button}
                        onPress={() => onSelect(backgroundColor)}
                        underlayColor="green">
        <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor:backgroundColor}]}>
            </View>
            <Text style={styles.text}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    button: {
        borderRadius:3,
        padding:10,
        margin:10,
        borderWidth:1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,.6)'
    },

    row: {
        flexDirection:'row',
        alignItems:'center'
    },

    sample: {
        height: 20,
        width:20,
        borderRadius:10,
        margin:5,
        backgroundColor:'white'
    },

    text: {
        fontSize:30,
        margin:5
    }
});

export default ColorButton;