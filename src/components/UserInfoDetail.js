import React from 'react';
import { View, Text } from 'react-native';
import ReadingUser from "./ReadingUser";
import FollowersChart from "./FollowersChart";

const UserInfoDetail = ({ route }) => {
    const { user } = route.params;
    const name = user.login;
    const { userInfo } = ReadingUser(name);
    return (
        <View style={{ padding: 16 }}>
            <Text>User Details</Text>
            <Text>ID: {user.id}</Text>
            <Text>Name: {user.login}</Text>
            <FollowersChart/>
        </View>

    );
};

export default UserInfoDetail;