import {getOne} from "../hooks/getUserProfile";


export default function ReadingUser(name) {
    const { user } = getOne(name);

    return {
        userInfo: user
    };
}