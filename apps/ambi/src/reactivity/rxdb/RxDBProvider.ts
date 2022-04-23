import { createContextProvider } from '@solid-primitives/context'
import { createResource } from 'solid-js'

import type { AppDatabase } from '@sunner/ambi/db'
import { createAppDatabase } from '@sunner/ambi/db'

// export type RxDBProviderParams = {}

export const RxDBContext = createContextProvider<
  AppDatabase | undefined,
  Record<never, never>
>(() => {
  const [db] = createResource(createAppDatabase)

  return db()
})
