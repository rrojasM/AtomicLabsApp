import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Step3 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Text style={{ color: '#FFF' }}>!TE ENCANTARA</Text> TRABAJAR CON NOSOTROS!</Text>
            <View style={{ alignItems:'center', justifyContent: 'center' }} >
                <Image
                    style={{ width: 370, height: 100, top:20}}
                    source={require('../assets/Group4040.png')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:35,
        padding:10
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E34F1E'
    }
})

export default Step3;
