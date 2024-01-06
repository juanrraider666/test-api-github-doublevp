// import { useQuery } from "@tanstack/react-query"
import { getAll } from '../api/users'
import { useQuery } from 'react-query';

export function UseGetReadingList() {
  const { data, isLoading, isError } = useQuery('reading-list', () => getAll(), {
     suspense: true,
   });

  return {
    list: data.items,
    loading: isLoading,
    total: isError ? 0 : data.total_count,
  }
}
