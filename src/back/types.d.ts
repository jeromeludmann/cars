export interface Car {
  name: string
  color: string
}

export interface Filters {
  name?: string
  color?: string
}

export interface Paging {
  page: number
  perPage: number
}
