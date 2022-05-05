import * as pouchAdapterHttp from 'pouchdb-adapter-http'
import * as pouchAdapterIdb from 'pouchdb-adapter-idb'
import type { RxDatabase } from 'rxdb'
import { addRxPlugin, createRxDatabase } from 'rxdb'
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election'
import { addPouchPlugin, getRxStoragePouch } from 'rxdb/plugins/pouchdb'
import { RxDBReplicationCouchDBPlugin } from 'rxdb/plugins/replication-couchdb'

import type { VendorCollection } from '@sunner/ambi/db/vendor'
import { vendorCollectionCreator } from '@sunner/ambi/db/vendor'

addRxPlugin(RxDBReplicationCouchDBPlugin)
addRxPlugin(RxDBLeaderElectionPlugin)
addPouchPlugin(pouchAdapterIdb)
addPouchPlugin(pouchAdapterHttp)

export type AppDatabaseCollections = {
  vendors: VendorCollection
}

export type AppDatabaseInstance = RxDatabase<AppDatabaseCollections>

export default abstract class AppDatabase {
  private static _instance: AppDatabaseInstance | undefined

  private constructor() {}

  public static async init(): Promise<AppDatabaseInstance> {
    if (!this._instance) {
      this._instance = await createRxDatabase<AppDatabaseInstance>({
        eventReduce: true,
        name: 'app_db',
        storage: getRxStoragePouch('idb'),
      })

      await this._instance.waitForLeadership()

      await this._instance.addCollections({ vendors: vendorCollectionCreator })
    }

    return this._instance
  }

  public static get db(): AppDatabaseInstance {
    if (this._instance === undefined) throw Error('AppDatabase uninitialized')
    else return this._instance
  }
}
