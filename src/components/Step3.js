import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Step3 = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    <Text style={{ color: '#FFF' }}>!TE ENCANTARA <Text> </Text></Text>
                    TRABAJAR CON NOSOTROS!
                </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'space-around' }} >
                <Image
                    style={{ width: 390, height: 120, marginVertical: 30, top: 20 }}
                    source={require('../assets/Group4040.png')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 35,
        padding: 10,
        marginVertical: 20,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E34F1E',
    }
})

export default Step3;
