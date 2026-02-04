import { FetchResAPI } from '@/provider/server'
import Image from 'next/image'
import { Suspense } from 'react'
import { SectionMenu } from '@/components/layout/header/SectionMenu'
import { GetBlurData } from '@/lib/getBlur'

export const HeaderLayout = async () => {
  const data = await FetchResAPI('/public-prodi/profil')
  const detail = data?.data?.SatuanOrganisasi
  const blurLogo = await GetBlurData(detail?.logo)

  return (
    <header className={'w-full bg-primary max-w-[1920px] p-2 mx-auto'}>
      <div className="flex items-center justify-between container">
        <div className="flex items-center gap-1.5">
          <Image
            src={detail?.logo}
            alt="Logo"
            width={150}
            height={150}
            placeholder="blur"
            blurDataURL={blurLogo}
            className={'object-contain size-16 rounded-full'}
          />
          <div>
            <h1 className="text-white lg:text-2xl">{detail?.singkatan_universitas}</h1>
            <p className="text-white">
              {detail?.kode_jenjang}-{detail?.nama}
            </p>
          </div>
        </div>

        <Suspense>
          <SectionMenu />
        </Suspense>
      </div>
    </header>
  )
}
