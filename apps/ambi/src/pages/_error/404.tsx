import { Button, Center, Container, Heading, VStack } from '@hope-ui/solid'
import { useI18n } from '@solid-primitives/i18n'
import { Link } from 'solid-app-router'
import type { JSX } from 'solid-js'

export default function ErrorPage(): JSX.Element {
  const [t] = useI18n()

  return (
    <Container>
      <Center h="100vh">
        <VStack>
          <Heading size="7xl">{t('error.notFound.title')}</Heading>

          <Button as={Link} href="/dashboard" mt="$10">
            {t('common.actions.goToDashboard')}
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}
