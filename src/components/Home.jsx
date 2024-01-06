import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Suspense, useLayoutEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

import {Loading} from "./ui/Loading";
import {ReadingList} from "./ReadingList";

export default function Home() {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();
    const queryClient = new QueryClient();

    const search = (text) => {
       setSearchText(text);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Stack1")} //en dado caso de que queramos navegar a esta Stack
                style={{
                    backgroundColor: 'purple',
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    justifyContent: 'center'
                }}
              >
                  <Text
                  style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: 'white',
                  }}
                  >
                      +
                  </Text>
              </TouchableOpacity>
            ),
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => {
                    search(event.nativeEvent.text)
                },
            }
        })
    }, [navigation])

    return (
        <Suspense fallback={<Loading/>}>
            <View className="flex-1 pt-[10px] px-[20px]">
                <QueryClientProvider client={queryClient}>
                    <ReadingList name={searchText}/>
                </QueryClientProvider>
            </View>
        </Suspense>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})