import { useEffect, useState } from 'react'
import { IImageSlider } from '../data/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetSliderLanding = () => {
  const [sliderLanding, setSliderLanding] = useState<IImageSlider[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['sliderLanding'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/landing-page').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setSliderLanding(data)
    }
  }, [data])

  return { sliderLanding, loading }
}
