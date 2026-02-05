export const revalidate = 30
export const dynamic = 'force-static'

import { JumbotronTitle } from '@/components/common/JumbotronTitle'

const LecturerPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'DOSEN'} title={'Dosen'} />
      </div>
    </>
  )
}

export default LecturerPage
