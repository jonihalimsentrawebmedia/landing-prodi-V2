import { FetchResAPI } from '@/provider/server'
import Image from 'next/image'
import { Suspense } from 'react'
import { SectionMenu } from '@/components/layout/header/SectionMenu'
import { GetBlurData } from '@/lib/getBlur'
import { SheetMenu } from '@/components/layout/header/sheetMenu'

export const HeaderLayout = async () => {
  const data = await FetchResAPI('/public-prodi/profil')
  const detail = data?.data?.SatuanOrganisasi
  const blurLogo = await GetBlurData(detail?.logo)

  return (
    <header className={'w-full bg-primary lg:p-2 mx-auto fixed z-[999]'}>
      <div className="flex items-center justify-between container py-2 lg:py-0">
        <div className="flex items-center gap-1.5">
          <Image
            src={detail?.logo ?? '/img/noimg.png'}
            alt="Logo"
            width={150}
            height={150}
            placeholder="blur"
            blurDataURL={blurLogo}
            className={'object-contain size-10 lg:size-16 rounded-full'}
          />
          <div>
            <h1 className="text-white text-sm lg:text-2xl">{detail?.singkatan_universitas}</h1>
            <p className="text-white text-xs lg:text-base">
              {detail?.kode_jenjang}-{detail?.nama}
            </p>
          </div>
        </div>

        <Suspense>
          <SectionMenu />
        </Suspense>
        <SheetMenu />
      </div>
    </header>
  )
}
