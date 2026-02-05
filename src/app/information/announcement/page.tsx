import { Suspense } from 'react'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { AnnouncementSection } from '../announcement/components/setion'

const InfoAnnouncementsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <AnnouncementSection />
        </Suspense>
      </div>
    </>
  )
}

export default InfoAnnouncementsPage
