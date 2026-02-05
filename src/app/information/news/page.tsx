import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { Suspense } from 'react'
import { MoreNews } from '@/app/information/news/components/MoreNews'
import { NewsInformationAllSkeleton } from '@/app/information/news/components/skeleton'

const NewsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense fallback={<NewsInformationAllSkeleton />}>
          <MoreNews />
        </Suspense>
      </div>
    </>
  )
}

export default NewsPage
