import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

const Step1 = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>SOMOS EL BRAZO DERECHO DE LA TECNOLOGÍA</Text>

                <Card
                    containerStyle={{
                        backgroundColor: '#FB4C0C',
                        height: 350,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems:'center'
                    }}
                >

                    <Image
                        style={styles.image}
                        source={require('../assets/GroupUser.png')}
                    />
                    <Text>IMAGINA</Text>
                    <Text>{'\u2022'}</Text>

                </Card>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    image: {
        width: 50,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Step1;