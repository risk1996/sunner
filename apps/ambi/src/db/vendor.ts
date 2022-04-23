import type {
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from 'rxdb'

export type VendorDocumentType = {
  _id: string
  address: string | null
  isActive: boolean
  name: string
}

export const vendorSchema: RxJsonSchema<VendorDocumentType> = {
  description: 'describes a vendor entiry',
  keyCompression: true,
  primaryKey: '_id',
  properties: {
    _id: { type: 'string' },
    address: { type: 'string' },
    isActive: { type: 'boolean' },
    name: { type: 'string' },
  },
  required: ['_id', 'address', 'isActive'],
  title: 'vendor',
  type: 'object',
  version: 0,
}

export type VendorDocumentMethod = Record<never, never>
export const vendorDocumentMethod: VendorDocumentMethod = {}

export type VendorDocument = RxDocument<
  VendorDocumentType,
  VendorDocumentMethod
>

export type VendorCollectionMethod = Record<never, never>
export const vendorCollectionMethod: VendorCollectionMethod = {}

export type VendorCollection = RxCollection<
  VendorDocumentType,
  VendorDocumentMethod,
  VendorCollectionMethod
>

export const vendorCollectionCreator: RxCollectionCreator = {
  methods: vendorDocumentMethod,
  schema: vendorSchema,
  statics: vendorCollectionMethod,
}
