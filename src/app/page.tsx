import { Jumbotron } from '@/app/home/component/jumbotron'
import ListService from '@/app/home/component/listService'
import { TopNewsLanding } from '@/app/home/component/topNews'
import { AgendaAnnouncement } from '@/app/home/component/AgendaAnnouncement'
import { AboutStudyProgram } from '@/app/home/component/AboutStudyProgram'
import { WeAreLecturer } from '@/app/home/component/WeAreLecturer'
import { ContactRegister } from '@/app/home/component/contactRegister'

export default function Home() {
  return (
    <>
      <Jumbotron />
      <ListService />
      <TopNewsLanding />
      <AgendaAnnouncement />
      <AboutStudyProgram />
      <WeAreLecturer />
      <ContactRegister />
    </>
  )
}
