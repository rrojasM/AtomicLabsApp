import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Step1 = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>SOMOS EL BRAZO DERECHO DE LA TECNOLOGÍA</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    }
})

export default Step1;