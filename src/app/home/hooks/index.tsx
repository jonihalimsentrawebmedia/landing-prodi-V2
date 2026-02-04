import { useEffect, useState } from 'react'
import {
  IAgenda,
  IAgendaProps,
  IAnnouncement,
  IAnnouncementProps,
  IImageSlider,
  INews,
  INewsProps,
  IProdiAbout,
  IServiceProdi,
} from '../data/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { Meta } from '@/contexts/types'

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

export const UseGetOrganizationProfile = () => {
  const [profile, setProfile] = useState()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['profile'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/profil').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setProfile(data)
    }
  }, [data])

  return { profile, loading }
}

export const UseGetServiceProdi = () => {
  const [services, setServices] = useState<IServiceProdi[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['services'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/prodi-layanan').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setServices(data)
    }
  }, [data])

  return { services, loading }
}

export const UseGetNews = (props?: INewsProps) => {
  const { search, page, limit, id_category, no_includes_id, slug_category } = props ?? {}
  const [news, setNews] = useState<INews[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (search) ParamsSearch.append('search', search)
  if (slug_category) ParamsSearch.append('slug-kategori-berita', slug_category)
  if (id_category) ParamsSearch.append('id-kategori-berita', id_category)
  if (no_includes_id) ParamsSearch.append('no-include-id', no_includes_id)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['news', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/berita?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setNews(data.data)
      setMeta(data.meta)
    }
  }, [data])

  return { news, meta, loading }
}

export const UseGetAgenda = (props?: IAgendaProps) => {
  const { page, limit, search, year } = props ?? {}

  const [agenda, setAgenda] = useState<IAgenda[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (search) ParamsSearch.append('search', search)
  if (year) ParamsSearch.append('tahun', year)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['agenda', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/agenda?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAgenda(data.data)
      setMeta(data.meta)
    }
  }, [data])

  return { agenda, meta, loading }
}

export const UseGetAnnouncement = (props?: IAnnouncementProps) => {
  const { page, limit, search, year, id_category } = props ?? {}

  const [announcement, setAnnouncement] = useState<IAnnouncement[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (search) ParamsSearch.append('search', search)
  if (year) ParamsSearch.append('tahun', year)
  if (id_category) ParamsSearch.append('id-kategori-pengumuman', id_category)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['announcement', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/pengumuman?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAnnouncement(data.data)
      setMeta(data.meta)
    }
  }, [data])

  return { announcement, meta, loading }
}

export const UseGetAboutProdi = () => {
  const [aboutProdi, setAboutProdi] = useState<IProdiAbout>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['about-prodi'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/tentang').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAboutProdi(data)
    }
  }, [data])

  return { aboutProdi, loading }
}
