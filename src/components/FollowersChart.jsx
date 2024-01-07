// Importa las librerías necesarias
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';

import { BarChart } from 'react-native-chart-kit';

const FollowersChart = () => {
    return (
    <>
        <Text style={styles.header}>Bar Chart</Text>
        <BarChart
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        data: [20, 45, 28, 80, 99, 43],
                    },
                ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={'Rs'}
            chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
            }}
            style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
        />
    </>
);
};

export default FollowersChart;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});