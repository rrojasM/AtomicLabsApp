import React from 'react';
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
    Platform,
    Dimensions,
    ScrollView
} from 'react-native';

///components
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>
                        <Text style={{ color: '#FFF' }}>Desarrolla todo</Text> {"\n"}
                        tu POTENCIAL
                        {"\n"}
                        <Text style={{ color: '#FFF' }}>dentro del equipo</Text>{"\n"}
                        ATOMIC <Text style={{ color: '#FFF' }} >LABS</Text>
                    </Text>
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
                    <Step1 />
                </View>

                <View>
                    <Step2 />
                </View>

                <View>
                    <Footer />
                </View>


            </ScrollView>

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
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    headerTitle: {
        margin: 10,
        flexDirection: 'row', 
        alignItems: 'center',
    }


})


export default Home;