import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

class InitialApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../images/logo.png')}
                        style={{ width: 250, height: 250 }}
                    />
                    <ActivityIndicator size={100} color="#2f3640" animating={true}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#487eb0',
        height: '100%'
    }
});

export default InitialApp;
