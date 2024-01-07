import {Text, View, Pressable, StyleSheet, Image} from "react-native";
import Animated, {
    RollOutLeft,
    SequencedTransition,
    ZoomIn
} from 'react-native-reanimated'
import {useRef} from "react";
import FollowersChart from "./FollowersChart";

export function UserInfo ({ user }) {
    return (
            <Animated.View
                style={styles.container}
                // className="self-center items-start relative"
                entering={ZoomIn}
                exiting={RollOutLeft}
                layout={SequencedTransition.duration(400).randomDelay()}
            >
                <Image style={styles.tinyLogo} /*className="w-[60px] h-[100px] rounded-md z-1" */ resizeMode="cover" source={{ uri: user?.avatar_url }}/>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700'}}>
                        {user?.login}
                    </Text>
                    <Text style={{ fontSize: 18, opacity: .7 }}>
                        {user?.id}
                    </Text>
                    <Text style={{ fontSize: 14, opacity: .8 }}>
                        {user?.type}
                    </Text>
                </View>
            </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 12,
       // backgroundColor: 'red'
    },
    tinyLogo: {
        width: 70,
        height: 70,
        borderRadius: 70,
        marginRight: 20/2,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
