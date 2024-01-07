import {View} from "react-native";
import React, {Suspense, useEffect, useState} from "react";

import {Loading} from "./ui/Loading";
import {ReadingList} from "./ReadingList";
import {SearchInput} from "./ui/SearchInput";
import {UseGetReadingList} from "../hooks/UseGetReadingList";
import {Button} from "./ui/Button";
import showToast from "../utils/Toast";
import Toast from "react-native-toast-message";

const RECORDED_LIMIT = 10;


export default function Home() {
    const [searchText, setSearchText] = useState('');

    const {
        data,
        isLoading,
        totalCount,
        incomplete,
        applyFilters
    } = UseGetReadingList(RECORDED_LIMIT)

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
                showToast({ type: 'error', text: 'Agregue mas de 4 caracteres.' });
            }

            if (text.toLowerCase() === 'doublevpartners') {
                showToast({ type: 'error', text: 'La palabra "doublevpartners" no está permitida.'})
            }
        }
    }

    return (
        <Suspense fallback={<Loading/>}>
            <View className="flex-1 pt-[10px] px-[20px]">
                <SearchInput
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
                <Toast />
                {data && <ReadingList list={data} total={totalCount}/>}

            </View>
        </Suspense>
    );
}