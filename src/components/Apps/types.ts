export interface AppCategoryType {
  id: number
  name: string
}
export interface AppType {
  id: number
  name: string
  logo_url: string
  website: string
  description: string
  rank: string
  categories: AppCategoryType[]
}
