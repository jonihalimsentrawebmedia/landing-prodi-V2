import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { SideMenu } from './component/sideMenu'
import { ReactNode } from 'react'
import { AccordionMenu } from '@/app/about/component/accordionMenu'

const LayoutAbout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <JumbotronTitle title={'Tentang Prodi'} context={'PROFIL'} />
      <div className="container lg:flex gap-x-5 py-5 items-start hidden">
        <SideMenu />
        <div className={'w-full'}>{children}</div>
      </div>

      <AccordionMenu>{children}</AccordionMenu>
    </>
  )
}

export default LayoutAbout
