import React, {Suspense} from 'react'
import {Stack} from 'expo-router'
import {View} from 'react-native'
import {Loading} from "../components/ui/Loading";
import {ReadingList} from "../components/ReadingList";
import {QueryClient, QueryClientProvider} from "react-query";
import Home from "../components/Home";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Divider from "../components/ui/Divider";



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
                        options={{title: 'Users'}}
                    />
                    {/*<Stack.Screen name="Stack1" component={Divider} /> en dado caso de que queramos navegar a esta Stack */}
                </Stack.Navigator>
            </QueryClientProvider>

        </>
    )
}