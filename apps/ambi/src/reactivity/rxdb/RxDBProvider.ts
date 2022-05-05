import { createContextProvider } from '@solid-primitives/context'

import type { AppDatabaseInstance } from '@sunner/ambi/db'
import AppDatabase from '@sunner/ambi/db'

export const RxDBContext = createContextProvider<
  AppDatabaseInstance,
  Record<never, never>
>(() => AppDatabase.db, await AppDatabase.init())

export const RxDBProvider = RxDBContext[0]

export const useRxDB = RxDBContext[1]
