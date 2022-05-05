import { useColorMode } from '@hope-ui/solid'
import { createMediaQuery } from '@solid-primitives/media'
import type { JSX } from 'solid-js'
import { createEffect } from 'solid-js'

export default function ColorSchemeListener(): JSX.Element {
  const preferLightMode = createMediaQuery('(prefers-color-scheme: light)')
  const preferDarkMode = createMediaQuery('(prefers-color-scheme: dark)')
  const { setColorMode } = useColorMode()

  createEffect(() => {
    if (preferLightMode()) setColorMode('light')
    else if (preferDarkMode()) setColorMode('dark')
    else setColorMode('system')
  })

  return null
}
