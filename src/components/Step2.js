import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import { Card } from 'react-native-elements';

const data = [
    {
        id: 1,
        name: 'Ramón Gómez',
        desc: 'Front-end developer',
    },
    {
        id: 2,
        name: 'Ximena Mejía',
        desc: 'UX Designer',
    },
    {
        id: 3,
        name: 'Jaime Domínguez',
        desc: 'Back-end developer',
    }

]
const Step2 = () => {
    const [users, setUser] = useState(data);

    useEffect(() => {
    }, [users])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}><Text style={{color:'#FFF'}}>NUESTRO</Text> EQUIPO</Text>
                <FlatList
                    data={users}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Card
                                    containerStyle={{
                                        backgroundColor: '#02548C',
                                        height: 250,
                                        borderRadius: 10,
                                        borderColor: '#02548C',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View style={{ alignItems: 'center', top: 5 }}>
                                        <Image
                                            style={styles.image}
                                            source={require('../assets/GroupUser.png')}
                                        />
                                        <Text style={[styles.desc, { fontWeight: 'bold' }]}>{item.name}</Text>
                                        <Text style={styles.desc}>{item.desc}</Text>
                                    </View>
                                </Card>
                            </>
                        )
                    }}
                    nestedScrollEnabled={true}
                />

            </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: 50,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        bottom: 10
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E34F1E'
    }

})

export default Step2;