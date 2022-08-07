import React, { useRef } from 'react';
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

///components
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Footer from '../components/Footer';
import Step3 from '../components/Step3';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = ({ navigation }) => {

    const scrollRef = useRef();
    const tapScroll = () => {

        const h = Dimensions.get('window').height;
        let scroll = h * 1;
        scrollRef.current?.scrollTo({
            x: 0,
            y: scroll,
            animated: true

        });
    }


    return (
        <>
            <View style={styles.container}>
                <ScrollView style={{ flexGrow: 1 }} ref={scrollRef} nestedScrollEnabled={true}>
                    <ImageBackground
                        resizeMode='cover'
                        style={styles.image}
                        source={require('../assets/MaskGroup.png')}
                    >
                        <View style={styles.headerTitle}>
                            <Text style={styles.title}>
                                <Text style={{ color: '#FFF' }}>Desarrolla todo</Text> {"\n"}
                                tu POTENCIAL
                                {"\n"}
                                <Text style={{ color: '#FFF' }}>dentro del equipo</Text>{"\n"}
                                ATOMIC <Text style={{ color: '#FFF' }} >LABS</Text>
                            </Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <TouchableWithoutFeedback
                                onPress={tapScroll}
                            >
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={require('../assets/Group4013x.png')}
                                />
                            </TouchableWithoutFeedback>
                            <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold' }}>Quiero saber más</Text>
                        </View>

                        <View style={{ alignContent: 'center', justifyContent: 'center', bottom: 40 }} >
                            <Image
                                style={{ width: 350, height: 300, marginVertical: 100, marginLeft: 20, bottom: 10 }}
                                source={require('../assets/Group4032.png')}
                            />
                        </View>

                        <View style={{ alignItems: 'center', bottom: 35}}>
                            <TouchableHighlight
                                style={styles.button}
                                onPress={() => navigation.navigate("Form")}
                            >
                                <Text style={{ color: '#00609C', textAlign: 'center', fontWeight: '500', fontSize: 20 }} >!Quiero ser parte!</Text>
                            </TouchableHighlight>
                        </View>

                    </ImageBackground>

                    <View>
                        <Step1 />
                    </View>

                    <View>
                        <Step3 />
                    </View>

                    <View>
                        <Step2 />
                    </View>

                    <View>
                        <Footer />
                    </View>

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04244B'
    },

    image: {
        bottom: 10,
        width: WIDTH,
        height: HEIGHT,
    },

    title: {
        color: '#E34F1E',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTitle: {
        margin: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        backgroundColor: '#FFF',
        height: 50,
        width: 190,
        justifyContent: 'center',
        borderRadius: 40,
        alignItems: 'center',
        bottom: 60
    },
})

export default Home;