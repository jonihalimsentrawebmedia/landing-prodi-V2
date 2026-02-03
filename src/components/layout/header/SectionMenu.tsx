'use client'

import { MenuHeader } from '@/components/layout/header/menus'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'

export const SectionMenu = () => {
  const pathname = usePathname()

  return (
    <ul className={'flex gap-5 items-center text-white'}>
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
