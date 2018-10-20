import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements'
import { login } from '../../actions/firebase-action';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: '',
            isLogin: false,
        })
    }
    onPressLogin(email, password) {
        this.setState({ isLogin: true })
        login(email, password).then(() => {
            this.setState({ isLogin: false })
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../../images/logo.png')}
                            style={{ width: 250, height: 250 }}
                        />
                    </View>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                        onChangeText={email => this.setState({ email: email })}
                    />
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password: password })}
                    />
                    <Button
                        title='LOGIN'
                        backgroundColor='#2f3640'
                        disabled={this.state.isLogin}
                        onPress={() => this.onPressLogin(this.state.email, this.state.password)}
                    />
                </View>
                {
                    this.state.isLogin ? (
                        <ActivityIndicator style={styles.loading} size={100} color="#2f3640" animating={true} />
                    ) : null
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.5
    }
});

export default Login;
