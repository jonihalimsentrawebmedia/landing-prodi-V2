'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { ContactSection } from '@/app/contact/components/contactSection'
import { RegistrationSection } from '@/app/contact/components/registrationSection'

export const TabsContactRegistration = () => {
  const tabsData = [
    { label: 'Kontak', value: 'contact', element: <ContactSection /> },
    { label: 'Pendaftaran', value: 'register', element: <RegistrationSection /> },
  ]

  const [value, setValue] = useState(tabsData[0].value)

  return (
    <>
      <Tabs value={value} onValueChange={setValue} className={'w-full container bg-white py-5'}>
        <TabsList className={'w-full rounded-none'}>
          {tabsData.map((tab, k) => (
            <TabsTrigger key={k} value={tab?.value}>
              {tab?.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, k) => (
          <TabsContent key={k} value={tab?.value}>
            {tab?.element}
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
