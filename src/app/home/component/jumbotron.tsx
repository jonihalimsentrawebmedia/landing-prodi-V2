'use client'

import { UseGetSliderLanding } from '@/app/home/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { UseStateContext } from '@/contexts'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { JumbotronSkeleton } from '@/app/home/component/skeleton'

export const Jumbotron = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = UseStateContext()

  if (loading) return <JumbotronSkeleton />

  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto relative'}>
        <div className="absolute z-10 w-full h-full flex items-center justify-center flex-col pointer-events-none bg-linear-to-t from-primary to-transparent">
          <div className="w-fit flex flex-col gap-12">
            <div className="hero-text text-center">
              <p className="text-white text-base font-medium tracking-wide">Selamat Datang di</p>
              <h1 className="text-white text-4xl font-semibold underline underline-offset-[14px] decoration-yellow-600">
                {profile?.SatuanOrganisasi?.kode_jenjang} {profile?.SatuanOrganisasi?.nama}
              </h1>
            </div>
            <Button
              variant={'outline'}
              className={'hero-text bg-white/30 border-white text-white rounded-full w-full'}
            >
              Jelajahi Website <ChevronDown />
            </Button>
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
              .filter((row) => row?.is_atas)
              ?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[540px]">
                    <Image
                      src={item.gambar_url}
                      alt="slider"
                      fill
                      sizes="100vw"
                      loading="eager"
                      placeholder="empty"
                      priority={index === 0}
                      className="object-cover"
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
