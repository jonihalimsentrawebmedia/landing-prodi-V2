import StateProvider from '@/contexts'
import React, { ReactNode } from 'react'
import { HeaderLayout } from '@/components/layout/header'
import Providers from '@/provider'
import { Toaster } from '@/components/ui/sonner'
import { FooterLayout } from '@/components/layout/footer'

interface Props {
  children: ReactNode
}

export const BaseLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <Providers>
        <StateProvider>
          <HeaderLayout />
          <Toaster
            toastOptions={{
              duration: 1000,
            }}
            position={'top-right'}
            richColors
          />
          <div className={'pt-[56px] lg:pt-[80px]'}>{children}</div>
          <FooterLayout />
        </StateProvider>
      </Providers>
    </>
  )
}
