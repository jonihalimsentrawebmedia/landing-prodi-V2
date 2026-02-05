import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { DetailSectionAnnouncement } from '@/app/information/announcement/[slug]/components/section'

const DetailAnnouncementPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionAnnouncement />
      </div>
    </>
  )
}

export default DetailAnnouncementPage
