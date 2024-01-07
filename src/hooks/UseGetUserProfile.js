import {getDetail, getOneByName} from '../api/users'
import { useQuery } from 'react-query';


/**
 * Obtiene la informacion del usuario de forma detallada.
 * @param name
 * @returns {{user: *}}
 */
export const getOne = (name) => {
    const { data: userDetail } = useQuery(['user', name], () => getDetail(name), { suspense: true })
    return {userDetail}
}