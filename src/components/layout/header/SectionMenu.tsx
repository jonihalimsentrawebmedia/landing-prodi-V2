'use client'

import { MenuHeader } from '@/components/layout/header/menus'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'
import { UseGetOrganizationProfile } from '@/app/home/hooks'
import { UseStateContext } from '@/contexts'
import { useEffect } from 'react'

export const SectionMenu = () => {
  const pathname = usePathname()
  const { profile } = UseGetOrganizationProfile()
  const [, Dispatch] = UseStateContext()

  useEffect(() => {
    if (profile) {
      Dispatch({ type: 'SET_PROFILE', payload: profile })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  return (
    <ul className={'flex gap-5 items-center text-white text-sm'}>
      {MenuHeader?.map((item, index) => (
        <Link href={item?.link} key={index}>
          <li
            className={clsx(
              index === 0 && pathname === item?.link
                ? 'underline decoration-2 underline-offset-8 font-bold decoration-yellow-600'
                : '',
              index !== 0 && pathname.includes(item?.link)
                ? 'underline decoration-2 underline-offset-8 font-bold decoration-yellow-600'
                : '',
              ''
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  )
}
