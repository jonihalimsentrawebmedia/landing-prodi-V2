export type NewsProps = {
  page: string
  limit: string
  start_index?: string
  search?: string
  category?: string
  id_category?: string
  no_include_id?: string
}

export type AnnouncementProps = {
  page: string
  limit: string
  search?: string
  year?: string
  id_category?: string
}

export type AgendaProps = {
  page: string
  limit: string
  search?: string
  year?: string
}

export interface NewsCategory {
  id_kategori: string
  nama_kategori: string
  slug: string
}