import type { useI18n } from '@solid-primitives/i18n'

import commonEN from '@sunner/ambi/locales/en-US.json'
import commonID from '@sunner/ambi/locales/id-ID.json'

export const DICT = {
  'en-US': commonEN,
  'id-ID': commonID,
}

export type TFunction = ReturnType<typeof useI18n>[0]

export function mapToAvailableLanguage(lang: string): keyof typeof DICT {
  if (lang.startsWith('id')) return 'id-ID'
  else return 'en-US'
}
