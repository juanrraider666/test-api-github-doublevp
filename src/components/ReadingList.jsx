// import Animated, {SlideInRight, SlideOutRight} from "react-native-reanimated";
import { View, Text, ScrollView, FlatList, Dimensions, TouchableHighlight, StatusBar, StyleSheet} from "react-native";
import React from "react";
import {UseGetReadingList} from "../hooks/UseGetReadingList";
// import Animated, {SlideInRight, SlideOutRight} from "react-native-reanimated";
// import {ScrollView} from "react-native-web";
import {UserInfo} from "./UserInfo";
import divider from "./ui/Divider";


export function ReadingList () {
    const { list, loading, total } = UseGetReadingList()
    const screenWidth = Math.round(Dimensions.get('screen').width)

    return (
        <View /*className="-m-5 p-5 pb-2 bg-[#c9f0ff]"*/>
            {total > 0 && (
                <FlatList
                    data={list}
                    keyExtractor={user => user.id}
                    ItemSeparatorComponent={divider}
                    contentContainerStyle={{
                        padding: 20,
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            key={item.id}
                            onPress={() => {
                                console.log(item);
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