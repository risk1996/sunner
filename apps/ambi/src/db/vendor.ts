import type { UUIDv4 } from '@sunner/ambi/types/uuid'

export default class VendorModel {
  public id!: UUIDv4

  public address!: Nullable<string>

  public isActive!: boolean

  public name!: string

  public static readonly INDEX = '$$id'
}
