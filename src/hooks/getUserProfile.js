import { getOneByName } from '../api/users'
import { useQuery } from 'react-query';


export function getOne(name) {
    const { data: user } = useQuery(['user', name], () => getOneByName({ name }), { suspense: true })

    return user
}