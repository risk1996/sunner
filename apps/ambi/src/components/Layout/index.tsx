import {
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  VStack,
} from '@hope-ui/solid'
import { List } from 'phosphor-solid'
import type { JSX, PropsWithChildren } from 'solid-js'

import { BRANDS } from '@sunner/ambi/constants/branding'
import { createFlipFlop } from '@sunner/ambi/reactivity/ops/createFlipFlop'

export default function Layout(props: PropsWithChildren): JSX.Element {
  const [isOpen, open, close] = createFlipFlop()

  return (
    <Container>
      <VStack>
        <HStack width="100%" mb="$4">
          <IconButton
            aria-label="Menu"
            colorScheme="neutral"
            icon={<List />}
            variant="ghost"
            onClick={open}
          />
          <Heading ml="$2" level={1} size="xl">
            {BRANDS.project}
          </Heading>
        </HStack>
        <HStack width="100%">{props.children}</HStack>
      </VStack>

      <Drawer opened={isOpen()} placement="left" onClose={close}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </Container>
  )
}
