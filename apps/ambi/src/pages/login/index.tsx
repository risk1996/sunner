import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from '@hope-ui/solid'
import { useI18n } from '@solid-primitives/i18n'
import { Asterisk, EnvelopeOpen } from 'phosphor-solid'
import type { JSX } from 'solid-js'

export default function LoginPage(): JSX.Element {
  const [t] = useI18n()

  return (
    <Center minH="$screenH">
      <VStack as="form" borderRadius="$md" p="$4" shadow="$md" w="$containerMd">
        <Heading level={1} size="4xl">
          {t('mod.auth.login.title')}
        </Heading>

        <FormControl mb="$2" required>
          <FormLabel for="email">{t('common.terms.email')}</FormLabel>

          <InputGroup>
            <InputLeftAddon>
              <EnvelopeOpen />
            </InputLeftAddon>
            <Input id="email" name="email" type="email" />
          </InputGroup>
        </FormControl>

        <FormControl mb="$2" required>
          <FormLabel for="password">{t('common.terms.password')}</FormLabel>

          <InputGroup>
            <InputLeftAddon>
              <Asterisk />
            </InputLeftAddon>
            <Input id="password" name="password" type="password" />
          </InputGroup>
        </FormControl>

        <Button fullWidth mt="$4">
          {t('common.actions.login')}
        </Button>
      </VStack>
    </Center>
  )
}
