import React from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  TouchableHighlight, Dimensions,
  ImageBackground, Image,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Formik } from 'formik';
import * as yup from 'yup';

import Footer from '../components/Footer';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Form = ({ navigation }) => {

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          lastName: ''
        }}

        onSubmit={values => {
          console.log('VALORES ', values);
          if (values.name !== '' && values.lastName !== '') {
            console.log('AVANZA A SIGUIENTE PANTALLA');
            navigation.navigate("ConfirmPhone");
          }
        }}

        validationSchema={
          yup.object().shape({
            name: yup.string().min(5, ({ min }) => `El nombre deberá tener mínimo ${min} caracteres`).required('Nombre es Requerido').nullable(),
            lastName: yup.string().min(5, ({ min }) => `El Apellido deberá tener mínimo ${min} caracteres`).required('Apellido es Requerido').nullable()
          })
        }
      >
        {({ values, errors, setFieldTouched, touched, handleChange, handleSubmit }) => (
          <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <ScrollView style={styles.container} nestedScrollEnabled={true} >
              <ImageBackground
                style={{
                  width: WIDTH,
                  height: HEIGHT * 1.2,
                  alignSelf: 'stretch'

                }}
                resizeMode='cover'
                source={require('../assets/MaskGroup.png')}
              >
                <View style={styles.form}>
                  <Text style={[styles.title, { color: '#FFF' }]} >TE QUEREMOS</Text>
                  <Text style={[styles.title, { color: '#E34F1E' }]}>CONOCER</Text>
                </View>

                <View style={styles.form}>
                  <Text style={styles.info}>Queremos saber que eres tú,
                    por favor ingresa los siguientes datos:
                  </Text>

                  <View>
                    <Text style={styles.label}>Nombre(s)</Text>
                    <TextInput
                      style={styles.textInput}
                      value={values.name}
                      onBlur={() => setFieldTouched('name')}
                      onChangeText={handleChange('name')}
                    />
                    {touched.name && errors.name &&
                      <Text style={{ fontSize: 11, color: 'red' }}>{errors.name}</Text>
                    }
                  </View>
                  <View style={{ height: 35 }} />

                  <View>
                    <Text style={styles.label} >Apellidos</Text>
                    <TextInput
                      style={styles.textInput}
                      value={values.lastName}
                      onBlur={() => setFieldTouched('lastName')}
                      onChangeText={handleChange('lastName')}
                    />
                    {touched.lastName && errors.lastName &&
                      <Text style={{ fontSize: 11, color: 'red' }}>{errors.lastName}</Text>
                    }
                  </View>

                  <View style={{ alignItems: 'center', top: 50 }}>
                    <TouchableHighlight
                      onPress={handleSubmit}
                      style={styles.button}
                    >
                      <Text style={{ color: '#FFF', textAlign: 'center' }}>Enviar</Text>
                    </TouchableHighlight>
                  </View>

                  <View style={{ alignItems: 'center', top: 50 }}>
                    <Image
                      style={styles.imageBody}
                      resizeMode='cover'
                      source={require('../assets/Group4033.png')}
                    />
                  </View>
                </View>
              </ImageBackground>

              <View>
                <Footer />
              </View>

            </ScrollView>

          </TouchableWithoutFeedback>

        )}
      </Formik>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04244B',
    backfaceVisibility: 'visible',
    alignSelf: 'stretch',
    marginTop: -10
  },
  form: {
    padding: 10,
    margin: 5
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
    bottom: 20
  },
  imageBody: {
    width: 390,
    height: 500,
    alignItems: 'center'
  }

})

export default Form;
