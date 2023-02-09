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

export enum RequestType {
  'New submission',
  'Update dApp information',
}

export enum ProjectStatus {
  'Live',
  'Work in progress',
}
export interface FormDataProps {
  name: string
  request: RequestType
  project_status: ProjectStatus
  website: string
  category_ids: string
  brief_introduction: string
  detail_description: string
  logo_url: string
  smart_contract_address: string
  token_symbol: string
  project_email: string
  token_contract_address?: string
  tvl_interface: string
  github?: string
  twitter?: string
  telegram?: string
  coinmarketcap?: string
  coingecko?: string
  token?: string
}
