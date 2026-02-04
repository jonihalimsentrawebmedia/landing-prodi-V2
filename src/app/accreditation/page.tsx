import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { AccreditationSection } from '@/app/accreditation/components/section'

const AccreditationPage = () => {
  return (
    <>
      <JumbotronTitle title={'Akreditasi'} context={'AKREDITASI'} />
      <AccreditationSection />
    </>
  )
}

export default AccreditationPage
