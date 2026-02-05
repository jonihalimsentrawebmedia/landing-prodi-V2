import { useEffect, useState } from 'react'
import { Meta } from '@/contexts/types'
import AxiosClient from '@/provider/axios'
import { useQuery } from '@tanstack/react-query'
import { IPromotion } from '../data/types'

interface Props {
  page?: string
  limit?: string
  search?: string
  no_include_id?: string
}

export const UseGetPromotion = (props?: Props) => {
  const { page, limit, search, no_include_id } = props ?? {}
  const [promotion, setPromotion] = useState<IPromotion[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (search) ParamsSearch.append('search', search)
  if (no_include_id) ParamsSearch.append('no-include-id', no_include_id)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['promotion', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/promosi?${ParamsSearch}`).then((res) => res?.data),
  })

  useEffect(() => {
    if (data) {
      setPromotion(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  const loading = isLoading || isFetching

  return { promotion, meta, loading }
}
