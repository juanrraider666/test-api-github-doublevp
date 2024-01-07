import {getOne} from "../hooks/UseGetUserProfile";


export default function ReadingUser(name) {
    const { user } = getOne(name);

    return {
        userInfo: user
    };
}