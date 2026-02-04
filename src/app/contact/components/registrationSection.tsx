import { UseGetRegistration } from '@/app/contact/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'

export const RegistrationSection = () => {
  const { registration } = UseGetRegistration()

  const [tabValue, setTabValue] = useState('')
  useEffect(() => {
    if (registration) {
      setTabValue(registration[0]?.id_jalur_pendaftaran as string)
    }
  }, [registration])

  return (
    <>
      <Tabs value={tabValue} onValueChange={setTabValue}>
        <TabsList>
          <div className="absolute w-[2px] h-full left-1 top-2.5 bg-linear-to-b from-white to-primary hidden" />
          {registration.map((item, k) => (
            <TabsTrigger value={item?.id_jalur_pendaftaran} key={k}>
              <p className={'text-start w-full'}>{item?.nama_jalur_pendaftaran}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {registration.map((item, k) => (
          <TabsContent className={'bg-white p-5'} value={item?.id_jalur_pendaftaran} key={k}>
            <div
              className={'html-class'}
              dangerouslySetInnerHTML={{ __html: item?.deskripsi ?? '' }}
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
