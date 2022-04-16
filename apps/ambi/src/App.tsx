import { HopeProvider } from '@hope-ui/solid'
import { I18nContext, createI18nContext } from '@solid-primitives/i18n'
import type Keycloak from 'keycloak-js'
import { Router } from 'solid-app-router'
import type { JSX } from 'solid-js'

import ColorSchemeListener from '@sunner/ambi/components/ColorSchemeListener'
import { COMMON_DICT } from '@sunner/ambi/constants/i18n'
import { KeycloakProvider } from '@sunner/ambi/reactives/contexts/keycloak'
import AppRoutes from '@sunner/ambi/routes'
import Env from '@sunner/ambi/utils/Env'

const i18nContext = createI18nContext(COMMON_DICT, 'id-ID')

const keycloakConfig: Keycloak.KeycloakConfig = {
  clientId: Env.authClient,
  realm: Env.authRealm,
  url: Env.authUrl,
}

const keycloakInitOptions: Keycloak.KeycloakInitOptions = {
  onLoad: 'login-required',
  redirectUri: `${window.location.origin}/login`,
}

export default function App(): JSX.Element {
  return (
    <HopeProvider config={{ initialColorMode: 'system' }}>
      <ColorSchemeListener />

      <I18nContext.Provider value={i18nContext}>
        <KeycloakProvider
          config={keycloakConfig}
          initOptions={keycloakInitOptions}
        >
          <Router>
            <AppRoutes />
          </Router>
        </KeycloakProvider>
      </I18nContext.Provider>
    </HopeProvider>
  )
}
