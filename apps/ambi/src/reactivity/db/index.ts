import { createContextProvider } from '@solid-primitives/context'

export interface DexieTypes {}

export type DexieProviderParams = {
  db: DexieTypes['db']
}

const DexieContext = createContextProvider<
  DexieTypes['db'],
  DexieProviderParams
>(({ db }) => db)

/**
 * Dexie context provider component
 */
export const DexieProvider = DexieContext[0]

/**
 * Hook for listening to Dexie instance
 */
export const useDexie = DexieContext[1]
