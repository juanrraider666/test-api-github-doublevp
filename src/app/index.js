import React, { Suspense } from 'react'
import { Stack } from 'expo-router'
import { Text } from 'react-native'
import {View} from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";

export default function Home() {
    return (
        <>
            <Stack.Screen options={{
                title: 'Lista de Libros'
            }} />
            <View>
                <Text>Tab One</Text>
            </View>
        </>
    )
}