'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { UseGetAgenda, UseGetAnnouncement, UseGetSliderLanding } from '@/app/home/hooks'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaRegCalendarAlt } from '@react-icons/all-files/fa/FaRegCalendarAlt'
import { AgendaAnnouncementSkeleton } from '@/app/home/component/skeleton'

export const AgendaAnnouncement = () => {
  const { sliderLanding, loading: load1 } = UseGetSliderLanding()
  const { agenda, loading: load2 } = UseGetAgenda({
    page: '1',
    limit: '3',
  })
  const { announcement, loading: load3 } = UseGetAnnouncement({
    page: '1',
    limit: '3',
  })

  const loading = load1 || load2 || load3

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <>
      <div className={'relative mx-auto w-full max-w-[1920px] h-[470px]'}>
        <div
          className={
            'bg-linear-to-t from-primary to-[#24429799] w-full h-full flex items-center absolute z-10 top-0 left-0'
          }
        >
          <div className="container flex items-start gap-x-8 relative">
            <div className="w-5/12 p-4 bg-blue-50 flex flex-col gap-5">
              <p className="pl-2 ml-2 border-l-2 border-primary text-primary text-2xl">Agenda</p>
              <ul className="pl-2">
                {agenda?.map((row, index) => (
                  <li key={index} className="py-1 flex items-center gap-1.5">
                    <div
                      className={
                        'flex flex-col justify-center items-center whitespace-nowrap gap-1.5 w-fit p-2 px-3 border border-primary bg-white'
                      }
                    >
                      <p className={'font-semibold text-xl'}>
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                      </p>
                      <p>{row?.waktu_mulai ? format(row?.waktu_mulai, `MMM yy`) : ''}</p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p className="font-semibold">{row?.judul}</p>
                      <p className="font-semibold">{row?.lokasi_kegiatan}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href={'/agenda'}
                className={'flex items-center gap-1.5 text-primary font-semibold'}
              >
                Lihat Agenda <ArrowRight />
              </Link>
            </div>

            <div className="w-7/12 p-4 border border-white">
              <p className="pl-2 ml-2 border-l-2 border-white text-white text-2xl">Pengumuman</p>
              <ul className={'pl-4 flex flex-col gap-1.5 mt-5'}>
                {announcement?.map((row, index) => (
                  <li key={index} className="py-1 flex items-center gap-1.5 text-white">
                    <div className="flex flex-col gap-1.5">
                      <p className="font-semibold">{row?.judul_pengumuman}</p>
                      <p className="text-sm flex items-center gap-1.5">
                        <FaRegCalendarAlt />
                        {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href={'/announcement'}
                className={'flex mt-5 items-center gap-1.5 text-white font-semibold'}
              >
                Lihat Pengumuman <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ]}
        >
          <CarouselContent>
            {sliderLanding
              ?.filter((row) => row?.is_bawah)
              .map((item, index) => (
                <CarouselItem key={index}>
                  <div className={'w-full max-w-[1920px] h-full max-h-[470px]'}>
                    <Image
                      src={item?.gambar_url}
                      alt={'slider'}
                      className={'w-full h-[470px] object-cover'}
                      width={1440}
                      height={470}
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
