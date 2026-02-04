import { Context } from '@/contexts/types'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

interface Props {
  title: string
  context: Context
}

interface IImgBackground {
  context: Context
  gambar_key: string
  gambar_url: string
}

export const UseGetFlyerImageTitle = (props: Props) => {
  const { context } = props
  const [background, setbackground] = useState<IImgBackground[]>([])

  const ParamsSearch = new URLSearchParams()
  if (context) ParamsSearch.append('context', context)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['content-background', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/prodi-backgrounds?${ParamsSearch}`).then(
        (res) => res?.data?.data
      ),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setbackground(data)
    }
  }, [data])

  return { background, loading }
}
