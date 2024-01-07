import {getAll, getOneByName} from '../api/users'
import {useQuery} from "react-query";
import { useState } from 'react'

export const UseGetReadingList = (limit = null) =>  {

    const [filters, setFilters] = useState({
        name: 'juanrraider666'
    })

    const { isLoading, isError, data, error} = useQuery(
        ['users', 'list', filters],
      ({ signal }) => getOneByName({filters}),
    )

    const dataRecorded = limit ? data?.items.slice(0, limit) : data?.items;
    const applyFilters = (newFilters) => {
        setFilters(newFilters)
    }

    return {
        data: dataRecorded,
        isLoading: isLoading,
        totalCount: data?.total_count,
        incomplete: data?.incomplete_results,
        applyFilters,
    }
}
