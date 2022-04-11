import React, { useRef } from 'react';
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
    Platform,
    Dimensions,
    TouchableWithoutFeedback,

} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

/* import { ScrollView } from 'react-native-virtualized-view'; */

///components
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Footer from '../components/Footer';
import { Button } from 'react-native-elements';


const Home = ({ navigation }) => {


    const scrollRef = useRef();

    const tapScroll = () => {

        const h = Dimensions.get('window').height;
        let scroll = h * 3;
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
                    <ImageBackground
                        resizeMode='cover'
                        style={styles.image}
                        source={require('../assets/MaskGroup.png')}
                    >
                        <View style={{ alignContent: 'center', justifyContent: 'center' }} >
                            <Image
                                style={{ width: 350, height: 300, marginVertical: 100, marginLeft: 25 }}
                                source={require('../assets/Group4032.png')}
                            />


                        </View>

                    </ImageBackground>

                    <View>
                        <Button
                            title="Navegar"
                            onPress={() => navigation.navigate("Form")}
                        />
                    </View>



                    <View>
                        <Step1 />
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
        width: 750,
        height: 810,
        position: 'relative',
    },

    title: {
        color: '#E34F1E',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    headerTitle: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    }


})


export default Home;