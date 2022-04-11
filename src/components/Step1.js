import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';


const data = [
    {
        id: 1,
        name: 'Imagina',
        desc: 'Estrategia Digital \nBig Data & Analysis  \nConsultoria Tecnológica \n Reduccióm de costos TI',
        img: require('../assets/Group4036.png')
    },
    {
        id: 2,
        name: 'Explora',
        desc: 'Innovación y creación tecnológica \n UI/UX \n Innovación',
        img: require('../assets/Group4035.png')
    },
    {
        id: 3,
        name: 'Conquista',
        desc: 'Desarrollo tecnológico y creación tecnológica \n Ciberseguridad \n Servicios de la Nube',
        img: require('../assets/Group4037.png')
    }

]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Step1 = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>SOMOS EL BRAZO DERECHO <Text style={{ color: '#FB4C0C' }}>DE LA TECNOLOGÍA</Text></Text>


                <FlatList
                    horizontal={true}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Card
                                    containerStyle={{
                                        backgroundColor: '#FB4C0C',
                                        width: WIDTH - 30,
                                        height: HEIGHT - 300,
                                        borderRadius: 10,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View style={{ alignItems: 'center', top: 5 }}>
                                        <Image
                                            style={styles.image}
                                            source={item.img}
                                        />
                                        <Text style={[styles.desc, { fontWeight: 'bold', fontSize: 30 }]}>{item.name}</Text>
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
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        bottom: 10
    },
})

export default Step1;