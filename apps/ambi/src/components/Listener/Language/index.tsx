import { useI18n } from '@solid-primitives/i18n'
import type { JSX } from 'solid-js'
import { createEffect } from 'solid-js'

import { mapToAvailableLanguage } from '@sunner/ambi/locales'

export default function LanguageListener(): JSX.Element {
  const [, { locale }] = useI18n()
  createEffect(() => {
    function onChangeLanguage(): void {
      locale(mapToAvailableLanguage(navigator.language))
    }

    window.addEventListener('languagechange', onChangeLanguage)

    return () =>
      void window.removeEventListener('languagechange', onChangeLanguage)
  })

  return null
}
