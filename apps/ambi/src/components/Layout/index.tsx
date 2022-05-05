import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  VStack,
} from '@hope-ui/solid'
import { useI18n } from '@solid-primitives/i18n'
import { House, List } from 'phosphor-solid'
import { Link, useMatch } from 'solid-app-router'
import type { JSX, PropsWithChildren } from 'solid-js'
import { For, Show, createMemo } from 'solid-js'

import { BRANDS } from '@sunner/ambi/constants/branding'
import type { TFunction } from '@sunner/ambi/locales'
import { createFlipFlop } from '@sunner/ambi/reactivity/ops/createFlipFlop'

export interface LayoutProps {
  footer?: Maybe<JSX.Element>
}

interface LayoutDrawerItem {
  icon: JSX.Element
  name: string
  path: string
}

function getDrawerItems(t: TFunction): LayoutDrawerItem[] {
  return [
    { icon: <House />, name: t('mod.dashboard.title'), path: '/dashboard' },
  ]
}

export default function Layout(
  props: PropsWithChildren<LayoutProps>,
): JSX.Element {
  const [t] = useI18n()
  const [isOpen, open, close] = createFlipFlop()
  const pageName = createMemo(
    () => getDrawerItems(t).find(({ path }) => useMatch(() => path)())?.name,
  )

  return (
    <Container>
      <VStack h="100vh" pt="$2">
        <HStack mb="$4" w="100%">
          <IconButton
            aria-label="Menu"
            colorScheme="neutral"
            icon={<List />}
            onClick={open}
            variant="ghost"
          />
          <Heading level={1} ml="$2" size="xl">
            {BRANDS.project}
          </Heading>
        </HStack>

        <Show when={typeof pageName() === 'string'}>
          <Heading level={2} mb="$3" size="3xl" w="100%">
            {pageName()}
          </Heading>
        </Show>

        <VStack flex={1} overflowY="auto" w="100%">
          {props.children}
        </VStack>

        <Show when={props.footer}>
          <Box w="100%">
            <Divider />
            {props.footer}
          </Box>
        </Show>
      </VStack>

      <Drawer opened={isOpen()} placement="left" onClose={close}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <Box mt="$12" p="$2">
            <For each={getDrawerItems(t)}>
              {(route): JSX.Element => {
                const match = useMatch(() => route.path)

                return (
                  <Button
                    aria-label={route.name}
                    as={Link}
                    colorScheme={match() ? 'primary' : 'neutral'}
                    href={route.path}
                    justifyContent="flex-start"
                    leftIcon={route.icon}
                    variant={match() ? 'subtle' : 'ghost'}
                    w="100%"
                  >
                    {route.name}
                  </Button>
                )
              }}
            </For>
          </Box>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}
