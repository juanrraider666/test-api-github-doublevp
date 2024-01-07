import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FollowersChart from "./FollowersChart";
import {getOne} from "../hooks/UseGetUserProfile";

const ReadingInfoDetail = ({ route }) => {
    const { user } = route.params;
    const name = user.login;
    const { userDetail } = getOne(name);

    const followers = userDetail.followers;
    const following = userDetail.following;
    const repos     = userDetail.public_repos;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
            <Image
                style={styles.userImg}
                source={{uri: user?.avatar_url}}
            />
            <Text style={styles.userName}>{user.login}</Text>
            <Text style={styles.aboutUser}>
                {userDetail ? userDetail.bio || 'Biografia sin detalles.' : ''}
            </Text>
            <View style={styles.userInfoWrapper}>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{repos}</Text>
                    <Text style={styles.userInfoSubTitle}>Repositorios</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{followers}</Text>
                    <Text style={styles.userInfoSubTitle}>Seguidores</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{following}</Text>
                    <Text style={styles.userInfoSubTitle}>Seguidos</Text>
                </View>
            </View>
            <FollowersChart following={following} followers={followers}/>
        </ScrollView>

    );
};

export default ReadingInfoDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});