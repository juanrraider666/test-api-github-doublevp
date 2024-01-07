import {getAll, getOneByName} from '../api/users'
import {useQuery} from "react-query";
import { useState } from 'react'

export const UseGetReadingList = () =>  {
    const [filters, setFilters] = useState({
        name: 'lucachangretta'
    })

    const { isLoading, isError, data, error} = useQuery(
        ['users', 'list', filters],
      ({ signal }) => getOneByName({filters})
    )

    const applyFilters = (newFilters) => {
        setFilters(newFilters)
    }

    return {
        data: data?.items,
        isLoading: isLoading,
        totalCount: data?.total_count,
        incomplete: data?.incomplete_results,
        applyFilters,
    }
}
