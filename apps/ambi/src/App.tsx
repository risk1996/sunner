import { HopeProvider } from '@hope-ui/solid'
import { I18nContext, createI18nContext } from '@solid-primitives/i18n'
import { createMediaQuery } from '@solid-primitives/media'
import { Router } from 'solid-app-router'
import type { JSX } from 'solid-js'

import { COMMON_DICT } from '@sunner/ambi/constants/i18n'
import AppRoutes from '@sunner/ambi/routes'

const i18nContext = createI18nContext(COMMON_DICT, 'id-ID')

export default function App(): JSX.Element {
  const preferLightMode = createMediaQuery('(prefers-color-scheme: light)')

  return (
    <HopeProvider
      config={{ initialColorMode: preferLightMode() ? 'light' : 'dark' }}
    >
      <I18nContext.Provider value={i18nContext}>
        <Router>
          <AppRoutes />
        </Router>
      </I18nContext.Provider>
    </HopeProvider>
  )
}
