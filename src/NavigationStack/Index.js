import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Form from '../screens/Form';
import ConfirmPhone from '../screens/ConfirmPhone';
import ConfirmEmail from '../screens/ConfirmEmail';


const Stack = createNativeStackNavigator();
const Index = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#04244B'
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
                <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} options={{ headerShown: false }} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Index;