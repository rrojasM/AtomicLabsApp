import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.copyright}>© 2022 AtomicLabs. Todos los derechos reservados.</Text>
            <Text style={styles.privacy}>Aviso de privacidad</Text>
            <View style={styles.social}>
                <Image
                    style={{ height: 30, width: 30, right: 15 }}
                    source={require('../assets/linkedin.png')}
                />
                <Image
                    style={{ height: 30, width: 30, left: 15, top: 1 }}
                    source={require('../assets/twitter.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height:200,
        justifyContent:'center',
        top:15
    },
    copyright: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        bottom: 5
    },
    privacy: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        textDecorationLine: 'underline',
    },
    social: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center'

    }
})

export default Footer;