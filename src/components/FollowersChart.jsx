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

import {BarChart, ProgressChart, StackedBarChart} from 'react-native-chart-kit';

const FollowersChart = ({followers, following}) => {
    const data = {
        labels: ['Seg', 'Seg'],
        data: [followers / 10, following / 10],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mis metricas:</Text>
            <ProgressChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: '#cc14aa',
                    backgroundGradientFrom: '#7ff591',
                    backgroundGradientTo: '#f0f716',
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
        </View>
    );
};

export default FollowersChart;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        //   backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
         padding: 5,
         paddingBottom: 5,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
    },
});