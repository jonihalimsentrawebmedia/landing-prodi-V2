'use client'

import { UseStateContext } from '@/contexts'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail, MdFax } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export const FooterLayout = () => {
  const [{ profile }] = UseStateContext()
  const detail = profile?.SatuanOrganisasi

  return (
    <>
      <div className={'w-full bg-primary p-5 max-w-[1920px] mx-auto'}>
        <div className="container items-start justify-between flex gap-5">
          <div className={'flex flex-col gap-2'}>
            {detail?.logo && (
              <Image
                src={detail?.logo}
                alt={detail?.nama ?? ''}
                width={150}
                height={150}
                className={'rounded-full size-10'}
              />
            )}
            <p className={'text-2xl font-semibold text-white'}>{detail?.singkatan_universitas}</p>
          </div>

          <div>
            <h3 className={'text-xl text-white border-l-4 border-yellow-500 pl-2'}>Kontak</h3>
            <ul className={'text-white mt-4 flex flex-col gap-2'}>
              <Link
                target="_blank"
                href={`mailto:${detail?.email}`}
                className={'flex items-center gap-1.5'}
              >
                <MdEmail />
                {detail?.email}
              </Link>
              <Link
                target="_blank"
                href={`https://wa.me/${detail?.telepon}`}
                className={'flex items-center gap-1.5'}
              >
                <FaPhone />
                {detail?.telepon ?? ''}
              </Link>
              <li className={'flex items-center gap-2'}>
                <MdFax />
                {detail?.fax ?? ''}
              </li>
            </ul>
          </div>

          <div>
            <h3 className={'text-xl text-white border-l-4 border-yellow-500 pl-2'}>Alamat</h3>
            <p className="flex items-start gap-2 max-w-[265px] text-white mt-4">
              <IoLocationSharp className={'size-4 min-w-4'} />
              {detail?.alamat ?? ''}
            </p>
          </div>
          <div>
            <h3 className={'text-xl text-white border-l-4 border-yellow-500 pl-2'}>Sosial Media</h3>
            <ul className={'flex gap-2 mt-4'}>
              <Link target="_blank" href={detail?.facebook ?? '#'} className={'text-white'}>
                <FaFacebook className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.instagram ?? '#'} className={'text-white'}>
                <FaInstagram className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.twitter ?? '#'} className={'text-white'}>
                <FaTwitter className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.youtube ?? '#'} className={'text-white'}>
                <FaYoutube className={'size-6'} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
