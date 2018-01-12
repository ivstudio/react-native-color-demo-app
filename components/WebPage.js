import React from 'react';

import  {
    WebView,
    StyleSheet
} from 'react-native';

const WebPage = ({navigation}) => (
    <WebView style = {styles.container}
             source = {{uri: navigation.state.params.uri}}
             contentInset = {{top:-650}}
    />
);

WebPage.navigationOptions = {
    title: 'All Colors'
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});

export default WebPage;