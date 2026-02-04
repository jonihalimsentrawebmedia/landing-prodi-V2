import { JumbotronTitle } from '@/components/common/JumbotronTitle'
import { SideMenu } from './component/sideMenu'
import { ReactNode } from 'react'

const LayoutAbout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <JumbotronTitle title={'Tentang Prodi'} context={'PROFIL'} />
      <div className="container flex gap-x-5 py-5 items-start">
        <SideMenu />
        <div className={'w-full'}>{children}</div>
      </div>
    </>
  )
}

export default LayoutAbout
