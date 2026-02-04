import { FetchResAPI } from '@/provider/server'
import { ICurriculum } from '@/app/curriculum/data/types'
import { TabsCurriculumSection } from '@/app/curriculum/component/section'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { Suspense } from 'react'

const CurriculumPage = async () => {
  const curriculum = await FetchResAPI('/public-prodi/kurikulum?page=0&limit=0')
  const listCurriculum: ICurriculum[] = curriculum.data

  return (
    <>
      <JumbotronTitle title={'Kurikulum'} context={'KURIKULUM'} />
      <Suspense>
        <TabsCurriculumSection curiculum={listCurriculum} />
      </Suspense>
    </>
  )
}

export default CurriculumPage
