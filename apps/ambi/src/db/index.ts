import { Dexie } from 'dexie'

import VendorModel from '@sunner/ambi/db/vendor'
import type { UUIDv4 } from '@sunner/ambi/types/uuid'

export default class AppDatabase extends Dexie {
  public readonly vendors!: Dexie.Table<VendorModel, UUIDv4>

  public constructor() {
    super('app_db')

    this.version(1).stores({
      vendors: VendorModel.INDEX,
    })

    this.vendors.mapToClass(VendorModel)
  }
}

declare module '@sunner/ambi/reactivity/db' {
  export interface DexieTypes {
    db: AppDatabase
  }
}
