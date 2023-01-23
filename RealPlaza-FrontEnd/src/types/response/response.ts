import { ErrorModel } from './errorModel'

export interface Response<T> {
  succeeded: boolean
  message?: string
  errors?: ErrorModel[]
  data: T
}

export interface PagedResponse<T> extends Response<T> {
  pageNumber: number
  pageSize: number
  firstPage: string
  lastPage: string
  totalPages: number
  totalRecords: number
  nextPage?: string
  previousPage?: string
  otherFields?: any
}
