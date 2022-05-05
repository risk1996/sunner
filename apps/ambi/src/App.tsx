import type {
  KeycloakConfig,
  KeycloakInitOptions,
} from '@absolid/solid-keycloak'
import { KeycloakProvider } from '@absolid/solid-keycloak'
import type { HopeThemeConfig } from '@hope-ui/solid'
import { HopeProvider } from '@hope-ui/solid'
import { I18nContext, createI18nContext } from '@solid-primitives/i18n'
import { Router } from 'solid-app-router'
import type { JSX } from 'solid-js'

import ColorSchemeListener from '@sunner/ambi/components/Listener/ColorScheme'
import LanguageListener from '@sunner/ambi/components/Listener/Language'
import { DICT, mapToAvailableLanguage } from '@sunner/ambi/locales'
import { RxDBProvider } from '@sunner/ambi/reactivity/rxdb/RxDBProvider'
import AppRoutes from '@sunner/ambi/routes'
import Env from '@sunner/ambi/utils/Env'

const i18nContext = createI18nContext(
  DICT,
  mapToAvailableLanguage(navigator.language),
)

const hopeConfig: HopeThemeConfig = {
  components: {
    Table: {
      defaultProps: {
        root: { dense: true, highlightOnHover: true, striped: 'odd' },
      },
    },
  },
  initialColorMode: 'system',
}

const keycloakConfig: KeycloakConfig = {
  clientId: Env.authClient,
  realm: Env.authRealm,
  url: Env.authUrl,
}

const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: 'login-required',
  redirectUri: `${window.location.origin}/dashboard`,
}

export default function App(): JSX.Element {
  return (
    <KeycloakProvider config={keycloakConfig} initOptions={keycloakInitOptions}>
      <RxDBProvider>
        <HopeProvider config={hopeConfig}>
          <I18nContext.Provider value={i18nContext}>
            <ColorSchemeListener />
            <LanguageListener />

            <Router>
              <AppRoutes />
            </Router>
          </I18nContext.Provider>
        </HopeProvider>
      </RxDBProvider>
    </KeycloakProvider>
  )
}
