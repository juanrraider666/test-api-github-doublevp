import {StyleSheet, View} from "react-native";
import React, {Suspense, useEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {QueryClient} from 'react-query';

import {Loading} from "./ui/Loading";
import {ReadingList} from "./ReadingList";
import {FilterButton, FilterInput} from "./ui/FilterForm";
import {UseGetReadingList} from "../hooks/UseGetReadingList";

export default function Home() {
    const [searchText, setSearchText] = useState('lucachangretta');
    const navigation = useNavigation();
    const queryClient = new QueryClient();

    const {
        data,
        isLoading,
        totalCount,
        incomplete,
        applyFilters
    } = UseGetReadingList()

    const search = () => {
        applyFilters({
            name: searchText
        })
    };

    useEffect(() => {
        console.log('Writing...' , searchText)
    }, [searchText])

    return (
        <Suspense fallback={<Loading/>}>
            <View className="flex-1 pt-[10px] px-[20px]">
                <FilterInput
                    placeholder="Enter search text"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <FilterButton onPress={search} title="Filter"/>

                {isLoading && <Loading/>}
                {data && <ReadingList list={data} total={totalCount}/>}

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