
import { AgendaSection } from '@/app/information/agenda/component/agendaSection'
import { Suspense } from 'react'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'

const AgendaPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <AgendaSection />
        </Suspense>
      </div>
    </>
  )
}

export default AgendaPage
