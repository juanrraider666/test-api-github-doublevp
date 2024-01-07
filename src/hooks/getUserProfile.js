import {getDetail, getOneByName} from '../api/users'
import { useQuery } from 'react-query';


export const getOne = (name) => {
    const { data: user } = useQuery(['user', name], () => getDetail(name), { suspense: true })
    return {user}
}