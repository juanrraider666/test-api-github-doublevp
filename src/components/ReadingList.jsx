import React from "react";
import {FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View, useColorScheme} from "react-native";
import {UserInfo} from "./UserInfo";
import Divider from "./ui/Divider";
import {useNavigation} from "@react-navigation/native";

export function ReadingList ({list, total}) {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            {/*<Text className="text-2xl text-black dark:text-white">Total users ({total})</Text>*/}
            {total > 0 && (
                <FlatList
                    data={list}
                    keyExtractor={user => user.id}
                    ItemSeparatorComponent={Divider}
                    contentContainerStyle={{
                        padding: 20,
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            key={item.id}
                            onPress={() => navigation.navigate("Detail", { user: item })}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            >
                           <UserInfo user={item}/>
                        </TouchableHighlight>
                    )}
                />
                )}

            {total === 0 && (
                <Text>No se encontraron resultados.</Text>
            )}

        </View>
    )
}