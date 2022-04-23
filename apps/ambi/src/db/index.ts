import * as pouchAdapterHttp from 'pouchdb-adapter-http'
import * as pouchAdapterIdb from 'pouchdb-adapter-idb'
import type { RxDatabase } from 'rxdb'
import { addPouchPlugin, createRxDatabase, getRxStoragePouch } from 'rxdb'

import type { VendorCollection } from '@sunner/ambi/db/vendor'
import { vendorCollectionCreator } from '@sunner/ambi/db/vendor'

addPouchPlugin(pouchAdapterIdb)
addPouchPlugin(pouchAdapterHttp)

export type AppDatabaseCollections = {
  vendors: VendorCollection
}

let db: AppDatabase | undefined
export type AppDatabase = RxDatabase<AppDatabaseCollections>
export async function createAppDatabase(): Promise<AppDatabase> {
  if (!db) {
    db = await createRxDatabase<AppDatabase>({
      eventReduce: true,
      name: 'app_db',
      storage: getRxStoragePouch('idb'),
    })

    await db.waitForLeadership()

    await db.addCollections({ vendors: vendorCollectionCreator })
  }

  return db
}
