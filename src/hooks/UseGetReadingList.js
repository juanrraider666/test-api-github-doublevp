import {getAll, getOneByName} from '../api/users'
// import { useQuery } from 'react-query';
import { useQuery } from '@tanstack/react-query'
export function UseGetReadingList({name}) {
    console.log(name)
    const { isPending, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () => getOneByName(name),
    });

  return {
    list: error ? [] : data?.items,
    loading: isPending,
    total: error ? 0 : data?.total_count,
  }
}
