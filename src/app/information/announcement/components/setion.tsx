'use client'

import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { UseGetAnnouncementYear } from '../hooks/index'
import { UseGetAnnouncement } from '@/app/home/hooks'
import { UseStateContext } from '@/contexts'
import { ChipYear } from '@/app/information/announcement/components/chipYear'
import { useSearchParams } from 'next/navigation'
import { AnnouncementSkeletonSection } from '@/app/information/announcement/components/skeleton'
import { TitleUnderline } from '@/components/common/titleUnderline'

export const AnnouncementSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const { year, loading: load1 } = UseGetAnnouncementYear()
  const { announcement, loading: load2 } = UseGetAnnouncement({
    search: search ?? '',
  })
  const [{ profile }] = UseStateContext()
  const loading = load1 || load2

  if (loading) return <AnnouncementSkeletonSection />

  return (
    <>
      <div className="py-5">
        <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
          <div className={'col-span-4'}>
            <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
              <ArrowLeft className={'size-4'} />
              Kembali
            </Link>
            <TitleUnderline text={'Pengumuman Program Studi'} className={'text-start col-span-4'} />
            <SearchInput
              className={'bg-white w-full border border-gray-100 rounded-full pl-4 my-4'}
              placeholder={'Cari Pengumuman'}
            />
            <ChipYear data={year} />
          </div>

          {announcement?.map((item, l) => (
            <Link href={`/information/announcement/${item?.slug}`} key={l}>
              <div className="border p-5 rounded w-full flex flex-col gap-2 cursor-pointer">
                <Image
                  src={profile?.SatuanOrganisasi?.logo || '/img/noimg.png'}
                  alt="logo"
                  width={120}
                  height={120}
                  className="size-[120px] object-cover mx-auto"
                />
                <p className="line-clamp-2 font-semibold">{item?.judul_pengumuman}</p>
                <p className="flex text-primary items-center gap-1.5 text-sm">
                  <FaRegCalendarAlt />
                  {item?.published_at
                    ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                    : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
