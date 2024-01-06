import {getOne} from "../hooks/getUserProfile";


export default function ReadingUser(word) {
    const { user } = getOne(word);

    return {
        user
    }
}