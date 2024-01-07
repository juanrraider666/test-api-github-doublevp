import React from 'react'
import {Stack} from 'expo-router'
import {QueryClient, QueryClientProvider} from "react-query";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReadingInfoDetail from "../components/ReadingInfoDetail";
import Home from "../components/Home";

export default function Index() {
    const Stack = createNativeStackNavigator();
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{title: 'Usuarios'}}
                    />
                    <Stack.Screen name="Detail" component={ReadingInfoDetail} options={{title: 'Detalles'}} />
                </Stack.Navigator>
            </QueryClientProvider>

        </>
    )
}