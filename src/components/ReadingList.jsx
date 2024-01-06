import React, {useState} from "react";
import { View, Text, ScrollView, FlatList, Dimensions, TouchableHighlight, StatusBar, StyleSheet} from "react-native";
import { UseGetReadingList } from "../hooks/UseGetReadingList";
import { UserInfo } from "./UserInfo";
import Divider from "./ui/Divider";

export function ReadingList ({name}) {
    const { list, loading, total } = UseGetReadingList({name})
    return (
        <View /*className="-m-5 p-5 pb-2 bg-[#c9f0ff]"*/>
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
                            onPress={() => {
                               // console.log(item);
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            >
                           <UserInfo user={item}/>
                        </TouchableHighlight>
                    )}
                />
                )}

            {total === 0 && (
                <Text>No hay información, consulte de nuevo más tarde!</Text>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});