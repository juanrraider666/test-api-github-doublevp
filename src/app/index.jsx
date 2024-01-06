import React from 'react'
import {Stack} from 'expo-router'
import Home from "../components/Home";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function Index() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{title: 'Users'}}
                    />
                {/*<Stack.Screen name="Stack1" component={Divider} /> en dado caso de que queramos navegar a esta Stack */}
            </Stack.Navigator>
        </>
    )
}