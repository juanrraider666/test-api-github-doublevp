import {Text, View, Pressable, StyleSheet, Image, Linking, TouchableOpacity} from "react-native";
import Animated, {
    RollOutLeft,
    SequencedTransition,
    ZoomIn
} from 'react-native-reanimated'

export function UserInfo ({ user }) {
    return (
            <Animated.View
                style={styles.container}
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

                    <TouchableOpacity onPress={() => {
                        Linking.openURL(user.html_url);
                    }}>
                        <Text style={{ fontSize: 14, opacity: .8 }}>
                            Ver en Github
                        </Text>
                    </TouchableOpacity>
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
