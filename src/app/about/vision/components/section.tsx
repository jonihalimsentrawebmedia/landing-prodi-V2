'use client'

import { UseGetProfileVisionMission } from '../hooks/index'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SkeletonVision } from '../components/skeleton'

export const SectionVisionMission = () => {
  const { visionMission, loading } = UseGetProfileVisionMission()

  if (loading) return <SkeletonVision />

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Visi</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.visi ?? '' }}
        />

        <p className="text-3xl font-semibold text-primary">Misi</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.misi ?? '' }}
        />

        <p className="text-3xl font-semibold text-primary">Tujuan</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.tujuan ?? '' }}
        />

        <div className="flex items-center justify-between">
          <Link href={'/about/unit'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Unit
            </Button>
          </Link>
          <Link href={'/about/structure'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Struktur Organisasi
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
