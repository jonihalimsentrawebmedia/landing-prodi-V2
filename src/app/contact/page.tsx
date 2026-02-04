import { TabsContactRegistration } from '@/app/contact/components/Tabs'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'

const ContactProdiPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Kontak & Pendaftaran'} />

        <div className="w-full">
          <TabsContactRegistration />
        </div>
      </div>
    </>
  )
}

export default ContactProdiPage
