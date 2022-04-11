import React from 'react';
import {
    StyleSheet, Text,
    View,
    Dimensions,
    ImageBackground, Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Footer from '../components/Footer';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ConfirmEmail = () => {

    return (
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            <ImageBackground
                style={{
                    width: WIDTH,
                    height: HEIGHT
                }}
                resizeMode='cover'
                source={require('../assets/MaskGroup.png')}
            >
                <View style={styles.form}>
                    <Text style={[styles.title, { color: '#FFF' }]} >TUS DATOS</Text>
                    <Text style={[styles.title, { color: '#E34F1E' }]}><Text style={{ color: '#FFF' }}>HA SIDO</Text> ENVIADOS CON ÉXITO</Text>
                </View>

                <View style={styles.form}>

                    <Text style={styles.info}>
                        En breve recibirás un correo de confirmación
                        por parte del equipo de AtomicLabs.
                    </Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.info}>
                        Recuerda revisar tu bandeja de SPAM 
                        !Esperamos verte pronto!
                    </Text>
                    <View style={{ alignItems: 'center', top: 3 }}>
                        <Image
                            style={styles.imageBody}
                            resizeMode='cover'
                            source={require('../assets/Group4039.png')}
                        />
                    </View>
                </View>
            </ImageBackground>

            <View>
                <Footer />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 10,
        backgroundColor: '#04244B'
    },
    form: {
        padding: 10
    },    
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    info: {
        fontSize: 18,
        textAlign: 'left',
        color: '#FFF',
        top: 5
    },
    imageBody: {
        top:10,
        width: 375,
        height: 420,
        alignItems: 'center'
    }

})

export default ConfirmEmail;
