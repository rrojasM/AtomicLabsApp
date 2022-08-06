import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.copyright}>© 2022 AtomicLabs. Todos los derechos reservados.</Text>
                <Text style={styles.privacy}>Aviso de privacidad</Text>
                <View style={styles.social}>
                    <Image
                        style={{ height: 30, width: 30, right: 20 }}
                        source={require('../assets/linkedin.png')}
                    />
                    <Image
                        style={{ height: 30, width: 30, left: 20 }}
                        source={require('../assets/twitter.png')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 150,
        justifyContent: 'center',
        top: 50,
        marginVertical: 10,
        borderRadius: 2
    },
    copyright: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
        bottom: 35
    },
    privacy: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
        textDecorationLine: 'underline',
        bottom: 30
    },
    social: {
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container2: {
        top: 5
    }
})

export default Footer;