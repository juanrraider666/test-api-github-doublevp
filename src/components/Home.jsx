import {StyleSheet, View} from "react-native";
import React, {Suspense, useEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {QueryClient} from 'react-query';

import {Loading} from "./ui/Loading";
import {ReadingList} from "./ReadingList";
import {FilterInput} from "./ui/FilterForm";
import {UseGetReadingList} from "../hooks/UseGetReadingList";
import {Button} from "./ui/Button";
import ErrorLabel from "./ui/ErrorLabel";

const LIMIT = 10;


export default function Home() {
    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const queryClient = new QueryClient();

    const {
        data,
        isLoading,
        totalCount,
        incomplete,
        applyFilters
    } = UseGetReadingList(LIMIT)

    const search = () => {
        validateInput(searchText)
    };

    useEffect(() => {
        console.log('Writing...' , searchText)
    }, [searchText])

    const validateInput = (text) => {
        const isTextValid = (text.length >= 4) && (text.toLowerCase() !== 'doublevpartners');

        if (isTextValid) {
            applyFilters({
                name: searchText
            })
        } else {
            // Mostrar mensajes de error según las condiciones no cumplidas
            if (text.length < 4) {
                setErrorMessage('pspsps')
            }

            if (text.toLowerCase() === 'doublevpartners') {
                setErrorMessage('La palabra "doublevpartners" no está permitida.')
            }
        }
    }

    const closeErrorMessage = () => {
        setErrorMessage('');
    };

    return (
        <Suspense fallback={<Loading/>}>
            <View className="flex-1 pt-[10px] px-[20px]">
                <FilterInput
                    placeholder="Nombre de usuario"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <Button
                    isLoading={isLoading}
                    loadingText="Buscando..."
                    onPress={search}
                    title="Filter"
                >
                    Buscar
                </Button>

                {isLoading && <Loading/>}
                {errorMessage !== '' && (
                    <ErrorLabel message={errorMessage} onClose={closeErrorMessage} />
                )}

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