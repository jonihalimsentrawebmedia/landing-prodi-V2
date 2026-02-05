export interface IImageSlider {
  gambar_key: string
  gambar_url: string
  is_atas: boolean
  is_bawah: boolean
}

export interface IServiceProdi {
  id_prodi_layanan: string
  nama_layanan: string
  slug: string
  tampil: 'Y' | 'N'
  url_layanan: string
}

export interface INews {
  id_berita: string
  id_satuan_organisasi: string

  gambar: string
  gambar_key: string
  keterangan_gambar: string

  judul: string
  slug: string
  id_kategori_berita: string
  nama_kategori_berita: string

  isi_berita: string
  penulis: string
  baca: number

  status_publish: 'PUBLISHED'

  diterbitkan_at: string | null
  published_at: string | null
  unpublished_at: string | null

  published_user: string | null

  nama_disetujui: string | null
  nama_published: string | null

  berita_gambar_tambahan: INewsMoreImage[]
}

export interface INewsMoreImage {
  gambar: string
  gambar_key: string
  keterangan_gambar?: string
}

export interface INewsProps {
  page?: string
  limit?: string
  search?: string
  id_category?: string
  slug_category?: string
  no_includes_id?: string
}

export interface IAgendaProps {
  page?: string
  limit?: string
  search?: string
  year?: string
  no_includes_id?: string
}

export interface IAgenda {
  id_agenda: string
  id_satuan_organisasi: string
  gambar: string
  gambar_key: string
  keterangan_gambar: string
  judul: string
  slug: string
  waktu_mulai: string
  waktu_selesai: string
  lokasi_kegiatan: string

  isi_agenda: string
  penulis: string

  status_publish: 'PUBLISHED'

  diterbitkan_at: string | null

  published_at: string | null
  published_user: string | null
  nama_published: string | null
}

export type IAnnouncementProps = {
  page?: string
  limit?: string
  search?: string
  year?: string
  id_category?: string
  no_includes_id?: string
}

export interface IAnnouncement {
  id_pengumuman: string
  id_satuan_organisasi: string
  judul_pengumuman: string
  slug: string
  isi_pengumuman: string
  penulis: string

  status: 'Y' | 'N'
  status_publish: 'PUBLISHED'
  proses_at: string | null
  published_at: string | null
  published_user: string | null
  nama_published: string | null

  dokumens: IAttachment[]
}

export interface IAttachment {
  id_pengumuman_dokumen: number
  url_dokumen: string
  dokumen_key: string
  id_pengumuman: string
}

export interface IProdiAbout {
  id_satuan_organisasi: string
  id_unit: string
  isi_konten: string
  gambar: string[]
  created_at: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}
