import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { TopNewsLanding } from '@/app/home/component/topNews'
import { AnnouncementInformation } from './component/Announcement'
import { AgendaInformation } from './component/Agenda'
import { PromotionInformation } from '@/app/information/component/promotion'

const InformationPage = () => {
  return (
    <>
      <JumbotronTitle title={'Informasi'} context={'INFORMASI'} />
      <TopNewsLanding />
      <AnnouncementInformation />
      <AgendaInformation />
      <PromotionInformation/>
    </>
  )
}

export default InformationPage
