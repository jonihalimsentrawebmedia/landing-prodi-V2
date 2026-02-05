import { TabsGallery } from '@/app/gallery/components/Tabs'
import { JumbotronTitle } from '@/components/common/JumbotronTitle'

const GalleryPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Galeri'} />

        <div className="w-full">
          <TabsGallery />
        </div>
      </div>
    </>
  )
}

export default GalleryPage
