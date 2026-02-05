import { DetailSectionNews } from '@/app/information/news/[slug]/components/detailSection'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'

const DetailNewsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionNews />
      </div>
    </>
  )
}

export default DetailNewsPage
