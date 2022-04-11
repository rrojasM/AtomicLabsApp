import React, { useState } from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableHighlight, Dimensions,
    ImageBackground, Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';

import Footer from '../components/Footer';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ConfirmPhone = ({ navigation }) => {
    const [phoneNumber, setphoneNumber] = useState();

    const validatePhone = (num) => {
        console.log('PhoneNumber', num);
        ;

        if (num === undefined) {
            console.log('error');
        } else {

        }
    }

    return (
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            <ImageBackground
                style={{
                    width: WIDTH,
                    height: HEIGHT * 1.2
                }}
                resizeMode='cover'
                source={require('../assets/MaskGroup.png')}
            >
                <View style={styles.form}>
                    <Text style={[styles.title, { color: '#FFF' }]} >VALIDA TU</Text>
                    <Text style={[styles.title, { color: '#E34F1E' }]}>CELULAR</Text>
                </View>

                <View style={styles.form}>

                    <Text style={styles.info}>Necesitamos validar tu número para continuar </Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.info}>Ingresa tu Número a 10 dígitos y te enviaremos un código SMS. </Text>


                    <View style={{ height: 35 }} />

                    <View>
                        <Text style={styles.label} >Número de Celular</Text>
                        <TextInput
                            keyboardType='numeric'
                            maxLength={10}
                            style={styles.textInput}
                            value={phoneNumber}
                            onChangeText={(phoneN) => setphoneNumber(phoneN)}
                        />
                    </View>

                    <View style={{ alignItems: 'center', top: 50 }}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate("ConfirmEmail")}
                            style={styles.button}
                        >
                            <Text style={{ color: '#FFF', textAlign: 'center' }}>Enviar</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ alignItems: 'center', top: 50 }}>
                        <Image
                            style={styles.imageBody}
                            resizeMode='cover'
                            source={require('../assets/Group4034.png')}
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
    label: {
        color: '#FFF',
        bottom: 10
    },
    textInput: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'flex-start'

    },
    button: {
        backgroundColor: '#FB4C0C',
        height: 50,
        width: 200,
        justifyContent: 'center',
        borderRadius: 40,
        alignItems: 'center'
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
        width: 390,
        height: 500,
        alignItems: 'center'
    }

})

export default ConfirmPhone;

