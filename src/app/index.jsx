import React, {Suspense} from 'react'
import {Stack, useNavigation} from 'expo-router'
import {View} from 'react-native'
import {Loading} from "../components/ui/Loading";
import {ReadingList} from "../components/ReadingList";
import {QueryClient, QueryClientProvider} from "react-query";
import _header from "../components/ui/_header";

export default function Home() {
    const navigation = useNavigation();
    const queryClient = new QueryClient();
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Welcome users list Github',
                    headerTitle: 'My App',
                    headerRight: () => <_header />,
                }}
            />
            <Suspense fallback={<Loading/>}>
                <View className="flex-1 pt-[10px] px-[20px]">
                    <QueryClientProvider client={queryClient}>
                        <ReadingList/>
                    </QueryClientProvider>
                </View>
            </Suspense>
        </>
    )
}